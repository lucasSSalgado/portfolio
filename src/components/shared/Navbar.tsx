"use client";

import { useEffect, useState } from "react";
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
		{ href: "#experience", label: "Experiência" },
		{ href: "#technologies", label: "Tecnologias" },
		{ href: "#certificates", label: "Certificados" },
		{ href: "#about", label: "Sobre Mim" },
	];
	const languages = [
		{ code: "en", label: "English" },
		{ code: "pt", label: "Português" },
	];

	const path = usePathname();

	const [navigationLinks, setNavigationLinks] = useState(navigationLinksEN);

	useEffect(() => {
		if (path === "/pt") {
			setNavigationLinks(navigationLinksPT);
		} else {
			setNavigationLinks(navigationLinksEN);
		}		
	}, [path]);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-16 items-center justify-between px-4">
				<Link href="#top" className="flex items-center space-x-2">
					<span className="text-xl font-bold">Portfolio</span>
				</Link>

				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList>
						{navigationLinks.map((link) => (
							<NavigationMenuItem key={link.href}>
								<NavigationMenuLink asChild>
									<Link
										href={link.href}
										className="group bg-secondary inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/80 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
									>
										{link.label}
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>

				<div className="hidden md:flex items-center space-x-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								size="sm"
								className="gap-2 bg-transparent"
							>
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

				<div className="flex md:hidden items-center space-x-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm">
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
