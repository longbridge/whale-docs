import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const routeId = (id: string) => id
  .replace(/^zh-cn(?=\/|$)/, "zh-CN")
  .replace(/^zh-hk(?=\/|$)/, "zh-HK")
  .replace(/\.(md|mdx)$/, "")
  .replace(/\/index$/, "");

export async function getStaticPaths() {
  const entries = await getCollection("docs");
  return entries.map((entry) => ({
    params: { slug: routeId(entry.id) },
    props: { entry },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const entry = props.entry as Awaited<ReturnType<typeof getCollection<"docs">>>[number];
  const markdown = `# ${entry.data.title}\n\n${entry.data.description ? `${entry.data.description}\n\n` : ""}${entry.body}`;
  return new Response(markdown, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
