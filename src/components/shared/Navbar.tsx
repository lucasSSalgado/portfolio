"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const navigationLinksEN = [
		{ href: "#experience", label: "Experience" },
		{ href: "#technologies", label: "Technologies" },
		{ href: "#certificates", label: "Certificates" },
		{ href: "#about", label: "About Me" },
	];
	const navigationLinksPT = [
		{ href: "#experience", label: "Experiencia" },
		{ href: "#technologies", label: "Tecnologias" },
		{ href: "#certificates", label: "Certificados" },
		{ href: "#about", label: "Sobre Mim" },
	];
	const languages = [
		{ code: "en", label: "English" },
		{ code: "pt", label: "Portugues" },
	];

	const path = usePathname();
	const navigationLinks = path === "/pt" ? navigationLinksPT : navigationLinksEN;

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
				<Link href="#top" className="group flex items-center space-x-2">
					<span className="bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-xl font-bold tracking-tight text-transparent transition-opacity group-hover:opacity-85">
						Portfolio
					</span>
				</Link>

				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList>
						{navigationLinks.map((link) => (
							<NavigationMenuItem key={link.href}>
								<NavigationMenuLink asChild>
									<Link
										href={link.href}
										className="inline-flex h-9 w-max items-center justify-center rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm font-medium text-foreground/85 transition-all hover:-translate-y-0.5 hover:bg-card"
									>
										{link.label}
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				<div className="hidden items-center space-x-2 md:flex">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm" className="gap-2 bg-background/60">
								<Globe className="h-4 w-4" />
								{languages.find((language) => language.code === path.slice(1))?.label}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{languages.map((language) => (
								<DropdownMenuItem key={language.code}>
									<Link href={`/${language.code}`}>{language.label}</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="flex items-center space-x-2 md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm" className="bg-background/60">
								<Globe className="h-4 w-4" />
								<span className="sr-only">Change language</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{languages.map((language) => (
								<DropdownMenuItem key={language.code}>
									<Link href={`/${language.code}`}>{language.label}</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
}
