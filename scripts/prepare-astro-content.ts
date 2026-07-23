import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, extname, join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const outputRoot = join(root, '.astro-content');
const locales = ['en', 'zh-CN', 'zh-HK'];
const outputLocales: Record<string, string> = { 'zh-CN': 'zh-cn', 'zh-HK': 'zh-hk' };
const componentImport =
  "import { Accordion, AccordionGroup, Card, CardGroup, Mermaid, Note, Step, Steps, Tip, Update, Warning } from '@components/docs/index.ts';";

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? walk(path) : Promise.resolve([path]);
    }),
  );
  return files.flat();
}

function convertMdx(source: string) {
  const nativeLinks = source
    .replaceAll('/cn/', '/zh-cn/')
    .replaceAll('/zh-Hant/', '/zh-hk/')
    .replaceAll('/zh-hant/', '/zh-hk/');
  // Astro's static directory routes require the canonical trailing slash.
  // Normalize authored Markdown and component hrefs without touching fragments,
  // files, external URLs, or the source documents.
  const canonicalLinks = nativeLinks.replace(
    /(\/(?:en|zh-cn|zh-hk)\/[A-Za-z0-9][A-Za-z0-9/_-]*[A-Za-z0-9_-])(?=(?:#[^)'"\s]*)?(?:\)|['"]))/g,
    '$1/',
  );
  const withComponents = canonicalLinks.replace(/^(---\n[\s\S]*?\n---\n)/, `$1\n${componentImport}\n`);
  return withComponents.replace(/```mermaid\n([\s\S]*?)\n```/g, (_match, chart: string) => {
    return `<Mermaid chart={${JSON.stringify(chart)}} />`;
  });
}

await rm(outputRoot, { recursive: true, force: true });

let count = 0;
for (const locale of locales) {
  const sourceRoot = join(root, 'docs', locale);
  for (const sourcePath of await walk(sourceRoot)) {
    const extension = extname(sourcePath);
    if (extension !== '.md' && extension !== '.mdx') continue;
    const destination = join(outputRoot, outputLocales[locale] ?? locale, relative(sourceRoot, sourcePath));
    await mkdir(dirname(destination), { recursive: true });
    const source = await readFile(sourcePath, 'utf8');
    await writeFile(destination, extension === '.mdx' ? convertMdx(source) : source);
    count += 1;
  }
}

console.log(`Prepared ${count} Astro documentation pages.`);
