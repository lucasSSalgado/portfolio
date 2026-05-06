import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const lastModified = new Date("2026-05-06");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${siteUrl}/en`,
			lastModified,
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					en: `${siteUrl}/en`,
					pt: `${siteUrl}/pt`,
				},
			},
		},
		{
			url: `${siteUrl}/pt`,
			lastModified,
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					en: `${siteUrl}/en`,
					pt: `${siteUrl}/pt`,
				},
			},
		},
	];
}
