import {
	Code,
	Briefcase,
	User,
	Calendar,
	MapPin,
	Mail,
	GraduationCap,
	Github,
	Linkedin,
	FileDown,
	Plane,
	Users,
	Trophy,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { use } from "react";

import Navbar from "@/components/shared/Navbar";
import BackToTopButton from "@/components/shared/BackToTopBtn";
import BackToTopLink from "@/components/shared/BackToTopLink";
import MouseGlow from "@/components/shared/MouseGlow";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function HomePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = use(params);
	setRequestLocale(locale);
	const t = useTranslations("HomePage");

	return (
		<div id="top" className="relative min-h-screen overflow-x-hidden bg-background">
			<MouseGlow />
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="float-slow absolute -left-24 top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
				<div className="float-slow absolute right-0 top-[28rem] h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
			</div>

			<Navbar />

			<section className="px-4 py-24 text-center">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-8 reveal">
						<div className="hero-avatar-ring mx-auto mb-6 h-36 w-36 rounded-full border border-primary/25 bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
							<Image
								src="/foto_feira_cortes.jpeg"
								alt="Profile photo"
								width={144}
								height={144}
								priority
								className="h-full w-full rounded-full object-cover"
							/>
						</div>
						<h1 className="mb-4 bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl reveal reveal-delay-1">
							{t("title")}
						</h1>
						<p className="mb-6 text-xl text-foreground/85 md:text-2xl reveal reveal-delay-2">{t("subtitle")}</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground reveal reveal-delay-3">
							<div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5">
								<MapPin className="h-4 w-4" />
								<span>Florianopolis, SC - {t("pais")}</span>
							</div>
							<div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5">
								<Mail className="h-4 w-4" />
								<span>lucssslucsss@gmail.com</span>
							</div>
						</div>
					</div>
					<div className="reveal reveal-delay-3 flex flex-wrap justify-center gap-3">
						<Button className="transition-transform hover:-translate-y-0.5" asChild>
							<Link href="https://github.com/lucasSSalgado" target="_blank" rel="noopener noreferrer">
								<Github className="mr-2 h-4 w-4" />
								GitHub
							</Link>
						</Button>
						<Button variant="secondary" className="transition-transform hover:-translate-y-0.5" asChild>
							<Link
								href="https://www.linkedin.com/in/lucas-salgado-2a1448254/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="mr-2 h-4 w-4" />
								LinkedIn
							</Link>
						</Button>
						<Button variant="outline" className="bg-background/80 transition-transform hover:-translate-y-0.5" asChild>
							<Link href={locale === "pt" ? "/resume-pt.pdf" : "/resume-en.pdf"} download>
								<FileDown className="mr-2 h-4 w-4" />
								{t("resume")}
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section id="experience" className="px-4 py-20">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-12 text-center reveal">
						<Briefcase className="mx-auto mb-4 h-12 w-12 text-primary" />
						<h2 className="section-title">{t("xp")}</h2>
						<p className="section-subtitle">{t("xp_disc")}</p>
					</div>

					<div className="space-y-8">
						<Card className="surface-card reveal">
							<CardHeader>
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
									<div>
										<CardTitle className="text-xl">{t("f1_card_title")}</CardTitle>
										<CardDescription className="text-base font-medium text-foreground/80">
											Stefanini Consultoria S.A.
										</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="h-4 w-4" />
										<time dateTime="2022">21/02/2022 - 14/06/2022</time>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-foreground/85">
									<li>{t("f1_card_p1")}</li>
									<li>{t("f1_card_p2")}</li>
									<li>{t("f1_card_p3")}</li>
								</ul>
								<div className="mt-4 flex flex-wrap gap-2">
									<Badge variant="secondary">Spring Boot</Badge>
									<Badge variant="secondary">Oracle Database</Badge>
								</div>
							</CardContent>
						</Card>

						<Card className="surface-card reveal reveal-delay-1">
							<CardHeader>
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
									<div>
										<CardTitle className="text-xl">{t("card2.title")}</CardTitle>
										<CardDescription className="text-base font-medium text-foreground/80">
											Extreme Digital Services LTDA
										</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="h-4 w-4" />
										<time dateTime="2020/2022">{t("card2.time")}</time>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-foreground/85">
									<li>{t("card2.p1")}</li>
									<li>{t("card2.p2")}</li>
									<li>{t("card2.p3")}</li>
									<li>{t("card2.p4")}</li>
								</ul>
								<div className="mt-4 flex flex-wrap gap-2">
									<Badge variant="secondary">Spring Boot</Badge>
									<Badge variant="secondary">Oracle Database</Badge>
									<Badge variant="secondary">Angular</Badge>
									<Badge variant="secondary">Keycloak</Badge>
								</div>
							</CardContent>
						</Card>

						<Card className="surface-card reveal reveal-delay-2">
							<CardHeader>
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
									<div>
										<CardTitle className="text-xl">Next.js Full Stack</CardTitle>
										<CardDescription className="text-base font-medium text-foreground/80">Atualprev</CardDescription>
									</div>
									<a
										className="text-sm text-primary underline-offset-4 transition-colors hover:text-primary/70 hover:underline"
										href="https://rppsdigital.com.br/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Rpps Digital
									</a>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-foreground/85">
									<li>{t("card3.p1")}</li>
									<li>{t("card3.p2")}</li>
									<li>{t("card3.p3")}</li>
									<li>{t("card3.p4")}</li>
									<li>{t("card3.p5")}</li>
									<li>{t("card3.p6")}</li>
								</ul>
								<div className="mt-4 flex flex-wrap gap-2">
									<Badge variant="secondary">Next.js</Badge>
									<Badge variant="secondary">Drizzle</Badge>
									<Badge variant="secondary">Postgres Database</Badge>
									<Badge variant="secondary">Auth.js</Badge>
									<Badge variant="secondary">Tailwind</Badge>
									<Badge variant="secondary">TypeScript</Badge>
									<Badge variant="secondary">Shadcn/UI</Badge>
									<Badge variant="secondary">Coolify</Badge>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Separator />

			<section id="technologies" className="px-4 py-20">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-12 text-center reveal">
						<Code className="mx-auto mb-4 h-12 w-12 text-primary" />
						<h2 className="section-title">{t("technologies.title")}</h2>
						<p className="section-subtitle">{t("technologies.subtitle")}</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<Card className="surface-card reveal">
							<CardHeader>
								<CardTitle className="text-lg">Frontend</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<span>React / Next.js</span>
										<Badge>{t("technologies.advenced")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>TypeScript</span>
										<Badge>{t("technologies.advenced")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>Tailwind CSS</span>
										<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>Shadcn/UI</span>
										<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="surface-card reveal reveal-delay-1">
							<CardHeader>
								<CardTitle className="text-lg">Backend</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<span>Node.js</span>
										<Badge>{t("technologies.advenced")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>Java - Spring</span>
										<Badge>{t("technologies.advenced")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>OracleDB</span>
										<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>PostgreSQL</span>
										<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>Redis</span>
										<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="surface-card reveal reveal-delay-2">
							<CardHeader>
								<CardTitle className="text-lg">{t("technologies.other_tools")}</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<span>Docker</span>
										<Badge>{t("technologies.advenced")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>Git</span>
										<Badge>{t("technologies.advenced")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>Drizzle</span>
										<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>Better-auth</span>
										<Badge variant="outline">{t("technologies.begginer")}</Badge>
									</div>
									<div className="flex items-center justify-between">
										<span>Keycloak</span>
										<Badge variant="outline">{t("technologies.begginer")}</Badge>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Separator />

			<section id="certificates" className="px-4 py-20">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-12 text-center reveal">
						<GraduationCap className="mx-auto mb-4 h-12 w-12 text-primary" />
						<h2 className="section-title">Certificates</h2>
						<p className="section-subtitle">Recognitions and certifications I have earned.</p>
					</div>

					<div className="space-y-8">
						<Card className="surface-card reveal">
							<CardHeader>
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
									<div>
										<CardTitle className="text-xl">CS50x</CardTitle>
										<CardDescription className="text-base font-medium text-foreground/80">Harvard University</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="h-4 w-4" />
										<time dateTime="2023">{t("certificates.cs50x_date")}</time>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-foreground/85">{t("certificates.cs50x_description")}</p>
								<a
									href="/certificates/CS50x.pdf"
									target="_blank"
									download
									className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline"
								>
									Download Certificate
								</a>
							</CardContent>
						</Card>

						<Card className="surface-card reveal reveal-delay-1">
							<CardHeader>
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
									<div>
										<CardTitle className="text-xl">TypeScript and GraphQL</CardTitle>
										<CardDescription className="text-base font-medium text-foreground/80">
											University of Helsinki
										</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="h-4 w-4" />
										<time dateTime="2023">{t("certificates.cs50x_date")}</time>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-foreground/85">{t("certificates.helsilki_description")}</p>
								<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-around">
									<a
										href="/certificates/certificate-graphql.png"
										target="_blank"
										download
										className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline"
									>
										Download GraphQL
									</a>
									<a
										href="/certificates/certificate-typescript.png"
										target="_blank"
										download
										className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline"
									>
										Download TypeScript
									</a>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Separator />

			<section id="about" className="px-4 py-20">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-12 text-center reveal">
						<User className="mx-auto mb-4 h-12 w-12 text-primary" />
						<h2 className="section-title">{t("about.title")}</h2>
						<p className="section-subtitle">{t("about.subtitle")}</p>
					</div>

					<div className="mb-12 grid gap-8 md:grid-cols-2">
						<Card className="surface-card reveal">
							<CardHeader>
								<CardTitle className="text-lg">{t("about.personal_valies.title")}</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="mb-2 font-semibold">{t("about.personal_valies.t1")}</h4>
									<p className="text-sm text-foreground/80">{t("about.personal_valies.p1")}</p>
								</div>
								<div>
									<h4 className="mb-2 font-semibold">{t("about.personal_valies.t2")}</h4>
									<p className="text-sm text-foreground/80">{t("about.personal_valies.p2")}</p>
								</div>
								<div>
									<h4 className="mb-2 font-semibold">{t("about.personal_valies.t3")}</h4>
									<p className="text-sm text-foreground/80">{t("about.personal_valies.p3")}</p>
								</div>
							</CardContent>
						</Card>

						<Card className="surface-card reveal reveal-delay-1">
							<CardHeader>
								<CardTitle className="text-lg">{t("about.working_style.title")}</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="mb-2 font-semibold">{t("about.working_style.t1")}</h4>
									<p className="text-sm text-foreground/80">{t("about.working_style.p1")}</p>
								</div>
								<div>
									<h4 className="mb-2 font-semibold">{t("about.working_style.t2")}</h4>
									<p className="text-sm text-foreground/80">{t("about.working_style.p2")}</p>
								</div>
								<div>
									<h4 className="mb-2 font-semibold">{t("about.working_style.t3")}</h4>
									<p className="text-sm text-foreground/80">{t("about.working_style.p3")}</p>
								</div>
							</CardContent>
						</Card>
					</div>

					<Card className="surface-card reveal reveal-delay-2">
						<CardHeader>
							<CardTitle className="text-lg">{t("about.beyond_title")}</CardTitle>
							<CardDescription>{t("about.beyond_subtitle")}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-6 md:grid-cols-3">
								<div className="text-center">
									<div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
										<Plane className="h-7 w-7 text-primary" />
									</div>
									<h4 className="mb-2 font-semibold">{t("about.travel_title")}</h4>
									<p className="text-sm text-foreground/80">{t("about.travel_description")}</p>
								</div>
								<div className="text-center">
									<div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
										<Users className="h-7 w-7 text-primary" />
									</div>
									<h4 className="mb-2 font-semibold">{t("about.family_title")}</h4>
									<p className="text-sm text-foreground/80">{t("about.family_description")}</p>
								</div>
								<div className="text-center">
									<div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
										<Trophy className="h-7 w-7 text-primary" />
									</div>
									<h4 className="mb-2 font-semibold">{t("about.chess_title")}</h4>
									<p className="text-sm text-foreground/80">{t("about.chess_description")}</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<div className="mt-12 text-center reveal reveal-delay-3">
						<Card className="surface-card inline-block">
							<CardContent className="p-6">
								<h3 className="mb-2 text-lg font-semibold">{t("about.lets_connect")}</h3>
								<p className="mb-4 text-muted-foreground">{t("about.connect_subtitle")}</p>
								<div className="flex justify-center gap-4">
									<Button asChild>
										<Link href="mailto:lucssslucsss@gmail.com">
											<Mail className="mr-2 h-4 w-4" />
											{t("about.emial_me")}
										</Link>
									</Button>
									<Button variant="outline" asChild>
										<Link
											href={locale === "pt" ? "/resume-pt.pdf" : "/resume-en.pdf"}
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("about.resume")}
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<BackToTopButton />

			<footer className="border-t border-border/70 bg-primary px-4 py-8">
				<div className="container mx-auto max-w-4xl text-center">
					<p className="text-secondary">
						Copyright {new Date().getFullYear()} Lucas S. Salgado. Built with Next.js and Tailwind CSS.
					</p>
					<BackToTopLink />
				</div>
			</footer>
		</div>
	);
}
