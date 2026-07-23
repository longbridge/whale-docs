import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const DOCS_PATH = path.resolve("docs");
const LOCALE_URLS = { en: "en", "zh-CN": "zh-cn", "zh-HK": "zh-hk" };
const STABLE_ANCHOR = /\s+\{\/\*\s*([a-z0-9]+(?:-[a-z0-9]+)*)\s*\*\/\}\s*$/;
const ATX_HEADING = /^ {0,3}#{1,6}\s+(.+)$/;
const SETEXT_UNDERLINE = /^ {0,3}(?:=+|-+)\s*$/;
const FENCE = /^ {0,3}(`{3,}|~{3,})(.*)$/;

// These pages intentionally have different structures across locales. List the
// semantically shared sections so their public anchors cannot drift apart.
const SHARED_ANCHORS = {
  "docs/account-opening.mdx": [
    "api-overview",
    "mapping-and-status-model",
    "detailed-design",
    "end-to-end-flow",
    "flow-details",
    "status-decision",
    "api-details",
    "register-or-sign-in-a-user",
    "request-fields",
    "request-and-response-examples",
    "memberinfo",
    "submit-an-account-opening-application",
    "request-fields-1",
    "request-and-response-examples-1",
    "get-account-opening-application-information",
    "request-fields-2",
    "request-and-response-examples-2",
    "log-out-a-user",
    "request-fields-3",
    "error-codes",
    "faqs-and-items-to-confirm",
  ],
  "overview.mdx": ["products", "find-your-entry-point", "next-steps"],
  "whalesdk/whaleapp/android.mdx": [
    "system-requirements",
    "integration",
    "arouter-precompilation",
    "kapt-and-data-binding",
    "r8-configuration",
    "whale-managed-channel",
    "broker-managed-channel",
    "error-handling",
    "api-reference",
    "lb-whale-app",
    "startup-configuration",
    "advanced-configuration",
    "dependency-conflicts",
  ],
  "whalesdk/whaleapp/ios.mdx": [
    "system-requirements",
    "integration",
    "cocoapods-integration",
    "manual-integration",
    "initialize-sdk",
    "page-routing",
    "landscape-support",
    "message-push",
    "whale-managed-channel",
    "broker-managed-channel",
    "api-reference",
    "lb-whale-app",
  ],
  "whalesdk/whaleapp/web.mdx": [
    "integration-model",
    "build-time-configuration",
    "runtime-broker-configuration",
    "iframe-postmessage-protocol",
    "tenant-origin-validation",
    "sign-in-flow",
    "logout-flow",
    "broker-implementation-requirements",
    "configuration-example",
    "deployment",
  ],
  "whalesdk/whalecore/overview.mdx": [
    "when-to-use-it",
    "public-capabilities",
  ],
};

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const location = path.join(directory, entry.name);
      if (entry.isDirectory()) return markdownFiles(location);
      return /\.(?:md|mdx)$/.test(entry.name) ? [location] : [];
    }),
  );
  return nested.flat();
}

function parseDocument(file, source, errors) {
  const relative = path.relative(path.dirname(DOCS_PATH), file);
  const lines = source.split(/\r?\n/);
  const anchors = new Map();
  let fence;
  let frontmatter = lines[0]?.trim() === "---";

  const addHeading = (text, lineIndex) => {
    const anchor = text.match(STABLE_ANCHOR)?.[1];
    const location = `${relative}:${lineIndex + 1}`;
    if (!anchor) {
      errors.push(`${location}: heading is missing a stable English anchor`);
      return;
    }
    const previous = anchors.get(anchor);
    if (previous) {
      errors.push(
        `${location}: duplicate anchor "${anchor}" (first used at line ${previous})`,
      );
    } else {
      anchors.set(anchor, lineIndex + 1);
    }
  };

  lines.forEach((line, index) => {
    if (frontmatter) {
      if (index > 0 && line.trim() === "---") frontmatter = false;
      return;
    }

    const marker = line.match(FENCE)?.[1];
    if (fence) {
      if (
        marker &&
        marker[0] === fence.character &&
        marker.length >= fence.length &&
        line.slice(line.indexOf(marker) + marker.length).trim() === ""
      ) {
        fence = undefined;
      }
      return;
    }
    if (marker) {
      fence = { character: marker[0], length: marker.length };
      return;
    }

    const atx = line.match(ATX_HEADING);
    if (atx) {
      addHeading(atx[1], index);
      return;
    }
    if (SETEXT_UNDERLINE.test(line) && index > 0 && lines[index - 1].trim()) {
      addHeading(lines[index - 1], index - 1);
    }
  });

  return anchors;
}

function routeFor(file) {
  const [locale, ...segments] = path.relative(DOCS_PATH, file).split(path.sep);
  const urlLocale = LOCALE_URLS[locale];
  if (!urlLocale) return;
  const documentPath = segments.join("/").replace(/\.(?:md|mdx)$/, "");
  return `/${urlLocale}/${documentPath}`;
}

function linkedHrefs(source) {
  return [
    ...[...source.matchAll(/\]\(([^)\s]+)\)/g)].map((match) => match[1]),
    ...[...source.matchAll(/\bhref=["']([^"']+)["']/g)].map(
      (match) => match[1],
    ),
    ...[...source.matchAll(/^ {0,3}\[[^\]]+\]:\s*(\S+)/gm)].map(
      (match) => match[1],
    ),
  ];
}

function resolveLink(document, href, routes) {
  const [targetPath, fragment] = href.split("#", 2);
  if (!fragment) return;
  if (!targetPath) return { fragment, target: document };
  if (/^[a-z][a-z0-9+.-]*:/i.test(targetPath) || targetPath.startsWith("//")) {
    return;
  }

  const currentRoute = routeFor(document.file);
  const resolvedPath = targetPath.startsWith("/")
    ? targetPath
    : path.posix.resolve(path.posix.dirname(currentRoute), targetPath);
  const normalizedPath = resolvedPath
    .replace(/\.(?:md|mdx)$/, "")
    .replace(/\/$/, "");
  return { fragment, target: routes.get(normalizedPath) };
}

const errors = [];
const documents = new Map();
const routes = new Map();

for (const file of await markdownFiles(DOCS_PATH)) {
  const source = await readFile(file, "utf8");
  const anchors = parseDocument(file, source, errors);
  const relative = path.relative(DOCS_PATH, file);
  documents.set(relative, { anchors, file, source });
  routes.set(routeFor(file), { anchors, file });
}

for (const [relative, document] of documents) {
  for (const href of linkedHrefs(document.source)) {
    const resolved = resolveLink(document, href, routes);
    if (!resolved) continue;
    const { fragment, target } = resolved;
    if (!target) {
      errors.push(`${relative}: fragment link target does not exist: ${href}`);
    } else if (!target.anchors.has(fragment)) {
      errors.push(`${relative}: fragment link does not resolve: ${href}`);
    }
  }
}

const relativePaths = new Set(
  [...documents.keys()].map((file) => file.split(path.sep).slice(1).join("/")),
);

for (const relative of relativePaths) {
  const localized = Object.keys(LOCALE_URLS)
    .map((locale) => documents.get(path.join(locale, relative)))
    .filter(Boolean);
  if (localized.length !== 3) continue;

  const anchorLists = localized.map(({ anchors }) => [...anchors.keys()]);
  if (anchorLists.every((anchors) => anchors.length === anchorLists[0].length)) {
    const expected = anchorLists[0].join("\n");
    if (anchorLists.some((anchors) => anchors.join("\n") !== expected)) {
      errors.push(`${relative}: equivalent locale headings use different anchors`);
    }
    continue;
  }

  for (const anchor of SHARED_ANCHORS[relative] ?? []) {
    if (localized.some(({ anchors }) => !anchors.has(anchor))) {
      errors.push(
        `${relative}: shared anchor "${anchor}" is not aligned across locales`,
      );
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  console.error(`\nFound ${errors.length} heading anchor error(s).`);
  process.exitCode = 1;
} else {
  console.log(
    "All documentation headings and fragment links use stable, aligned English anchors.",
  );
}
