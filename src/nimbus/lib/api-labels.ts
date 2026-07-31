/**
 * Copy for the theme's API schema renderers, per locale.
 *
 * The theme's ApiSchemaFields / ApiResponseSchema take a `labels` object rather
 * than a locale, because a theme cannot own anyone's language table. This is
 * Whale's table, mapped from the three locales this site serves.
 */

export type Locale = "en" | "zh-CN" | "zh-HK";

export interface ApiLabels {
	required: string;
	childAttributes: string;
	envelope: string;
	dataStructure: string;
	empty: string;
}

const LABELS: Record<Locale, ApiLabels> = {
	en: {
		required: "required",
		childAttributes: "Child attributes",
		envelope: "Standard response envelope",
		dataStructure: "data structure",
		empty: "No nested fields",
	},
	"zh-CN": {
		required: "必填",
		childAttributes: "子属性",
		envelope: "标准响应结构",
		dataStructure: "data 数据结构",
		empty: "无子字段",
	},
	"zh-HK": {
		required: "必填",
		childAttributes: "子屬性",
		envelope: "標準響應結構",
		dataStructure: "data 數據結構",
		empty: "無子欄位",
	},
};

export function apiLabels(locale: string): ApiLabels {
	return LABELS[locale as Locale] ?? LABELS.en;
}
