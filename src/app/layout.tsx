import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Lucas Sodre Salgado | Full Stack Developer",
		template: "%s | Lucas Sodre Salgado",
	},
	description:
		"Full Stack Developer portfolio of Lucas Sodre Salgado, featuring production SaaS work, Next.js, TypeScript, Spring Boot, PostgreSQL, Stripe, and cloud deployments.",
	keywords: [
		"Lucas Sodre Salgado",
		"Full Stack Developer",
		"Next.js Developer",
		"TypeScript Developer",
		"Spring Boot Developer",
		"SaaS Developer",
		"Brazil Developer",
		"Portfolio",
	],
	authors: [{ name: "Lucas Sodre Salgado" }],
	creator: "Lucas Sodre Salgado",
	publisher: "Lucas Sodre Salgado",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/icon.svg",
		shortcut: "/icon.svg",
		apple: "/foto_feira_cortes.jpeg",
	},
	openGraph: {
		type: "profile",
		title: "Lucas Sodre Salgado | Full Stack Developer",
		description:
			"Portfolio of Lucas Sodre Salgado, a Full Stack Developer building production SaaS products with Next.js, TypeScript, Spring Boot, PostgreSQL, Stripe, and Docker.",
		siteName: "Lucas Sodre Salgado Portfolio",
		locale: "en_US",
		alternateLocale: "pt_BR",
		images: [
			{
				url: "/foto_feira_cortes.jpeg",
				width: 144,
				height: 144,
				alt: "Lucas Sodre Salgado",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Lucas Sodre Salgado | Full Stack Developer",
		description:
			"Full Stack Developer portfolio featuring production SaaS work, Next.js, TypeScript, Spring Boot, PostgreSQL, Stripe, and Docker.",
		creator: "@lss_lss_",
		images: ["/foto_feira_cortes.jpeg"],
	},
	alternates: {
		languages: {
			en: "/en",
			pt: "/pt",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NextTopLoader
					color="#3b82f6"   // Tailwind blue-500
					height={3}
					showSpinner={false}
					crawlSpeed={200}
					crawl={true}
					shadow="0 0 10px #3b82f6,0 0 5px #3b82f6"
				/>
				{children}
			</body>
		</html>
	);
}
