import { getCollection } from "astro:content";

export async function GET() {
	const entries = await getCollection("docs");
	const documents = entries.map((entry) => {
		const id = entry.id
			.replace(/\.(md|mdx)$/, "")
			.replace(/^cn(?=\/|$)/, "zh-cn")
			.replace(/^zh-Hant(?=\/|$)/, "zh-hk")
			.replace(/\/index$/, "");

		return {
			title: entry.data.title,
			url: `/${id}`,
			text: entry.body,
		};
	});

	return Response.json(documents);
}
