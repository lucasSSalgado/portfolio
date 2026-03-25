"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTopButton() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 480);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
				visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
			}`}
		>
			<Button
				onClick={scrollToTop}
				size="icon"
				className="rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
				aria-label="Back to top"
			>
				<ArrowUp className="h-4 w-4" />
			</Button>
		</div>
	);
}
