"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
	const glowRef = useRef<HTMLDivElement>(null);
	const rafRef = useRef<number | null>(null);
	const targetRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const element = glowRef.current;
		if (!element) return;

		const move = (event: PointerEvent) => {
			targetRef.current = { x: event.clientX, y: event.clientY };
			if (rafRef.current !== null) return;

			rafRef.current = window.requestAnimationFrame(() => {
				const { x, y } = targetRef.current;
				element.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
				rafRef.current = null;
			});
		};

		window.addEventListener("pointermove", move, { passive: true });
		return () => {
			window.removeEventListener("pointermove", move);
			if (rafRef.current !== null) {
				window.cancelAnimationFrame(rafRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={glowRef}
			aria-hidden="true"
			className="mouse-glow pointer-events-none fixed left-0 top-0 z-0 h-[440px] w-[440px] rounded-full"
		/>
	);
}

