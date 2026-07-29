import { getCollection } from "astro:content";
import { allOperations, operationRoutePath } from "../lib/openapi";
import {
	allTradingOperations,
	tradingOperationRoutePath,
} from "../lib/trading-openapi";

type SearchDoc = { title: string; url: string; text: string };

export async function GET() {
	// 1) MDX guide/content pages
	const entries = await getCollection("docs");
	const docs: SearchDoc[] = entries.map((entry) => {
		const id = entry.id
			.replace(/\.(md|mdx)$/, "")
			.replace(/^cn(?=\/|$)/, "zh-cn")
			.replace(/^zh-Hant(?=\/|$)/, "zh-hk")
			.replace(/\/index$/, "");

		return {
			title: entry.data.title,
			url: `/${id}`,
			text: entry.body ?? "",
		};
	});

	// 2) BrokerAPI operation reference pages (datasets + operations). Without these,
	//    the dev search fallback (/search-index.json) cannot find any API by name/path.
	const brokerOps: SearchDoc[] = allOperations().map((record) => {
		const localePath = record.locale.toLowerCase();
		const op = record.operation;
		const title =
			op.summary || op.operationId || `${record.method.toUpperCase()} ${record.path}`;
		return {
			title,
			url: `/${localePath}/broker-api/${operationRoutePath(record.locale, record.method, record.path)}`,
			text: [
				record.method.toUpperCase(),
				record.path,
				op.operationId,
				op.summary,
				op.description,
			]
				.filter(Boolean)
				.join("\n"),
		};
	});

	// 3) TradingAPI operation reference pages
	const tradingOps: SearchDoc[] = allTradingOperations().map((record) => {
		const localePath = record.locale.toLowerCase();
		const op = record.operation;
		const title =
			op.summary || op.operationId || `${record.method.toUpperCase()} ${record.path}`;
		return {
			title,
			url: `/${localePath}/trading-api/${tradingOperationRoutePath(record.method, record.path)}`,
			text: [
				record.method.toUpperCase(),
				record.path,
				op.operationId,
				op.summary,
				op.description,
			]
				.filter(Boolean)
				.join("\n"),
		};
	});

	return Response.json([...docs, ...brokerOps, ...tradingOps]);
}
