import { mkdtemp, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";
import {
  buildLocalizedSpec,
  parseApprovalManifest,
  replaceBrokerNavigation,
  resolveApprovals,
  scanSourceOperations,
  type Locale,
} from "./lib/approved-api-publisher";

interface Options {
  source: string;
  manifest: string;
  dryRun: boolean;
}

function parseArgs(args: string[]): Options {
  const valueAfter = (flag: string) => {
    const index = args.indexOf(flag);
    return index >= 0 ? args[index + 1] : undefined;
  };
  return {
    source: resolve(valueAfter("--source") ?? "../whale-openapi-docs"),
    manifest: resolve(valueAfter("--approve") ?? "api-publication.yaml"),
    dryRun: args.includes("--dry-run"),
  };
}

async function gitCommit(directory: string): Promise<string> {
  const result = Bun.spawnSync(["git", "-C", directory, "rev-parse", "--short", "HEAD"]);
  return result.exitCode === 0 ? result.stdout.toString().trim() : "unknown";
}

async function writeAtomically(target: string, content: string): Promise<void> {
  const temporaryDirectory = await mkdtemp(
    resolve(dirname(target), ".whale-api-publish-"),
  );
  const temporaryFile = resolve(temporaryDirectory, target.split("/").at(-1)!);
  try {
    await writeFile(temporaryFile, content);
    await rename(temporaryFile, target);
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

export async function main(args = process.argv.slice(2)): Promise<void> {
  const options = parseArgs(args);
  const manifest = parseApprovalManifest(await readFile(options.manifest, "utf8"));
  if (manifest.apis.length === 0) {
    throw new Error("Approval manifest is empty. Refusing to replace the published API documentation.");
  }

  const sourceOperations = await scanSourceOperations(options.source);
  const approved = resolveApprovals(manifest, sourceOperations);
  const sourceCommit = await gitCommit(options.source);

  console.log(`Source: ${options.source}`);
  console.log(`Source commit: ${sourceCommit}`);
  console.log(`Discovered: ${sourceOperations.length}`);
  console.log(`Approved: ${approved.length}`);
  console.log(`Excluded: ${sourceOperations.length - approved.length}`);

  if (options.dryRun) {
    console.log("\nDry run complete. No files were changed.");
    return;
  }

  const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  const docsPath = resolve(root, "docs.json");
  const docs = JSON.parse(await readFile(docsPath, "utf8"));
  const outputs = new Map<string, string>();
  for (const locale of ["en", "zh-CN", "zh-HK"] as Locale[]) {
    outputs.set(
      resolve(root, `openapi.${locale}.json`),
      `${JSON.stringify(buildLocalizedSpec(approved, locale), null, 2)}\n`,
    );
  }
  outputs.set(
    docsPath,
    `${JSON.stringify(replaceBrokerNavigation(docs, approved), null, 2)}\n`,
  );

  for (const [target, content] of outputs) await writeAtomically(target, content);
  console.log(`\nPublished ${approved.length} approved APIs.`);
}

if (import.meta.main) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
