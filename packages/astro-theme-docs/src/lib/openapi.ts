/**
 * Generic OpenAPI helpers — pure functions over a parsed document.
 *
 * Deliberately narrow: no file loading, no document merging, no vendor
 * extensions. How a site obtains and assembles its spec (YAML on disk, a build
 * step, several domain files merged into one) is site-specific, so that stays
 * with the consumer. What is genuinely reusable is `$ref`/`allOf` resolution
 * and turning an API path into a URL slug.
 */

/** Minimal shape these helpers need. Anything else on the document passes through. */
export type OpenApiDocument = {
	paths: Record<string, Record<string, unknown>>;
	components?: Record<string, any>;
	[key: string]: any;
};

/**
 * API path -> URL slug: drop the leading slash, strip `{}` from path
 * parameters, and replace anything outside `[a-zA-Z0-9/_-]` with a dash.
 *
 *   /v1/accounts/{account_id}/orders  ->  v1/accounts/account_id/orders
 */
export function operationPath(path: string): string {
	return path
		.replace(/^\//, "")
		.replace(/[{}]/g, "")
		.replace(/[^a-zA-Z0-9/_-]+/g, "-");
}

/**
 * Resolves a schema for rendering: follows `$ref` (document-internal only) and
 * flattens `allOf`, merging `properties` and unioning `required` across parts.
 * Returns the input unchanged when there is nothing to resolve, so it is safe
 * to call on every nested schema while walking a tree.
 */
export function resolveSchema(document: OpenApiDocument, schema: any): any {
	if (!schema) return schema;
	if (schema.$ref) {
		return resolveSchema(
			document,
			schema.$ref
				.replace(/^#\//, "")
				.split("/")
				.reduce((value: any, key: string) => value?.[key], document),
		);
	}
	if (!schema.allOf) return schema;

	const parts = schema.allOf.map(
		(part: any) => resolveSchema(document, part) ?? {},
	);
	return parts.reduce(
		(merged: any, part: any) => ({
			...merged,
			...part,
			properties: { ...(merged.properties ?? {}), ...(part.properties ?? {}) },
			required: [
				...new Set([...(merged.required ?? []), ...(part.required ?? [])]),
			],
		}),
		{ ...schema, allOf: undefined },
	);
}
