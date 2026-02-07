	import { setRequestLocale } from "next-intl/server";
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
		FileDown
	} from "lucide-react";
	import Link from "next/link";

	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle,
	} from "@/components/ui/card";
	import { Badge } from "@/components/ui/badge";
	import { Separator } from "@/components/ui/separator";
	import { Button } from "@/components/ui/button";
	import Navbar from "@/components/shared/Navbar";
	import BackToTopButton from "@/components/shared/BackToTopBtn";
	import BackToTopLink from "@/components/shared/BackToTopLink";
	import { use } from "react";
	import { useTranslations } from "next-intl";


	export default function HomePage({
		params,
	}: {
		params: Promise<{ locale: string }>;
	}) {
		const {locale} = use(params);
	
		setRequestLocale(locale);
		const t = useTranslations("HomePage");

		return (
			<div id="top" className="min-h-screen bg-background">
				<Navbar />

				<section className="py-20 px-4 text-center bg-gradient-to-br from-background to-muted/20">
					<div className="container mx-auto max-w-4xl">
						<div className="mb-8">
							<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
								<User className="w-16 h-16 text-primary" />
							</div>
							<h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-primary">
								{t("title")}
							</h1>
							<p className="text-xl md:text-2xl text-primary mb-6">
								{t("subtitle")}
							</p>
							<div className="flex flex-wrap justify-center gap-4 text-sm text-primary">
								<div className="flex items-center gap-2">
									<MapPin className="w-4 h-4" />
									<span>Florianópolis, SC - {t("pais")}</span>
								</div>
								<div className="flex items-center gap-2">
									<Mail className="w-4 h-4" />
									<span>lucssslucsss@gmail.com</span>
								</div>
							</div>
						</div>
						<div className="flex justify-center gap-4">
							<Button className="bg-secondary-foreground text-secondary" variant="default" size="sm" asChild>
								<Link
									href="https://github.com/lucasSSalgado"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="w-4 h-4 mr-2" />
									GitHub
								</Link>
							</Button>
							<Button className="bg-secondary-foreground text-secondary" variant="default" size="sm" asChild>
								<Link
									href="https://www.linkedin.com/in/lucas-salgado-2a1448254/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="w-4 h-4 mr-2" />
									LinkedIn
								</Link>
							</Button>
							<Button
								className="bg-secondary-foreground text-secondary" variant="default" size="sm" asChild>
								<Link
									href={locale === "pt" ? "/resume-pt.pdf" : "/resume-en.pdf"}
									download
								>
									<FileDown className="w-4 h-4 mr-2" />
									{t("resume")}
								</Link>
							</Button>
						</div>
					</div>
				</section>

				<section id="experience" className="py-20 px-4">
					<div className="container mx-auto max-w-4xl">
						<div className="text-center mb-12">
							<Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h2 className="text-3xl md:text-4xl font-bold mb-4">{t("xp")}</h2>
							<p className="text-lg text-primary">
								{t("xp_disc")}
							</p>
						</div>

						<div className="space-y-8">
							<Card>
								<CardHeader>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
										<div>
											<CardTitle className="text-xl">
												{t("f1_card_title")}
											</CardTitle>
											<CardDescription className="text-base font-medium text-primary">
												Stefanini Consultoria S.A.
											</CardDescription>
										</div>
										<div className="flex items-center gap-2 text-sm text-primary">
											<Calendar className="w-4 h-4" />
											<time dateTime="2022">21/02/2022 - 14/06/2022</time>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2 text-primary">
										<li>
											{t("f1_card_p1")}
										</li>
										<li>
											{t("f1_card_p2")}
										</li>
										<li>
											{t("f1_card_p3")}
										</li>
									</ul>
									<div className="flex flex-wrap gap-2 mt-4">
										<Badge variant="secondary">Spring Boot</Badge>
										<Badge variant="secondary">Oracle Database</Badge>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
										<div>
											<CardTitle className="text-xl">
												{t("card2.title")}
											</CardTitle>
											<CardDescription className="text-base font-medium text-primary">
												Extreme Digital Services LTDA
											</CardDescription>
										</div>
										<div className="flex items-center gap-2 text-sm text-primary">
											<Calendar className="w-4 h-4" />
											<time dateTime="2020/2022">{t("card2.time")}</time>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2 text-primary">
										<li>{t("card2.p1")}</li>
										<li>{t("card2.p2")}</li>
										<li>{t("card2.p3")}</li>
										<li>{t("card2.p4")}</li>
									</ul>
									<div className="flex flex-wrap gap-2 mt-4">
										<Badge variant="secondary">Spring Boot</Badge>
										<Badge variant="secondary">Oracle Database</Badge>
										<Badge variant="secondary">Angular</Badge>
										<Badge variant="secondary">Keycloak</Badge>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
										<div>
											<CardTitle className="text-xl">
												Nextjs Full Stack
											</CardTitle>
											<CardDescription className="text-base font-medium text-primary">
												Atualprev
											</CardDescription>
										</div>
										<div className="flex items-center gap-2 text-sm text-primary">
											<a className="text-primary underline text-xl" href="https://rppsdigital.com.br/" target="_blank">
												Rpps Digital
											</a>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2 text-primary">
										<li> {t("card3.p1")}</li>
										<li> {t("card3.p2")}</li>
										<li> {t("card3.p3")}</li>
										<li> {t("card3.p4")}</li>
										<li> {t("card3.p5")}</li>
										<li> {t("card3.p6")}</li>
									</ul>
									<div className="flex flex-wrap gap-2 mt-4">
										<Badge variant="secondary">Nextjs</Badge>
										<Badge variant="secondary">Drizzle</Badge>
										<Badge variant="secondary">Postgres Database</Badge>
										<Badge variant="secondary">Auth.js</Badge>
										<Badge variant="secondary">Tailwind</Badge>
										<Badge variant="secondary">Typescript</Badge>
										<Badge variant="secondary">Shadcn/UI</Badge>
										<Badge variant="secondary">Coolify</Badge>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<Separator />

				<section id="technologies" className="py-20 px-4">
					<div className="container mx-auto max-w-4xl">
						<div className="text-center mb-12">
							<Code className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								{t("technologies.title")}
							</h2>
							<p className="text-lg text-primary">
								{t("technologies.subtitle")}
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<Card>
								<CardHeader>
									<CardTitle className="text-lg">Frontend</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										<div className="flex justify-between items-center">
											<span>React / Next.js</span>
											<Badge>{t("technologies.advenced")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>TypeScript</span>
											<Badge>{t("technologies.advenced")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>Tailwind CSS</span>
											<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>Shadcn/UI</span>
											<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle className="text-lg">Backend</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										<div className="flex justify-between items-center">
											<span>Node.js</span>
											<Badge>{t("technologies.advenced")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>Java - Spring</span>
											<Badge>{t("technologies.advenced")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>OracleDB</span>
											<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>PostgreSQL</span>
											<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>Redis</span>
											<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle className="text-lg">{t("technologies.other_tools")}</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										<div className="flex justify-between items-center">
											<span>Docker</span>
											<Badge>{t("technologies.advenced")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>Git</span>
											<Badge>{t("technologies.advenced")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>Drizzle</span>
											<Badge variant="secondary">{t("technologies.intermediate")}</Badge>
										</div>
										<div className="flex justify-between items-center">
											<span>Better-auth</span>
											<Badge variant="outline">{t("technologies.begginer")}</Badge>
										</div>
										<div className="flex justify-between items-center">
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

				<section id="certificates" className="py-20 px-4">
					<div className="container mx-auto max-w-4xl">
						<div className="text-center mb-12">
							<GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
							<p className="text-lg text-primary">
								Recognitions and certifications I’ve earned
							</p>
						</div>

						<div className="space-y-8">
							<Card>
								<CardHeader>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
									<div>
										<CardTitle className="text-xl">
										CS50x
										</CardTitle>
										<CardDescription className="text-base font-medium text-primary">
										University of Harvard
										</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-primary">
										<Calendar className="w-4 h-4" />
										<time dateTime="2023">{t("certificates.cs50x_date")}</time>
									</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-primary">{t("certificates.cs50x_description")}</p>
									<a
										href="/certificates/CS50x.pdf"
										target="_blank"
										download
										className="inline-block mt-3 text-sm text-primary hover:underline"
									>
									📥 Download
									</a>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
									<div>
										<CardTitle className="text-xl">
										Typescript and Graphql
										</CardTitle>
										<CardDescription className="text-base font-medium text-primary">
										University of Helsinki  
										</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-primary">
										<Calendar className="w-4 h-4" />
										<time dateTime="2023">{t("certificates.cs50x_date")}</time>
									</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-primary">{t("certificates.helsilki_description")}</p>
									<div className="flex flex-col md:flex-row md:items-center md:justify-around gap-2">
										<a
											href="/certificates/certificate-graphql.png"
											target="_blank"
											download
											className="inline-block mt-3 text-sm text-primary hover:underline"
										>
										📥 Download GraphQl
										</a>

										<a
											href="/certificates/certificate-typescript.png"
											target="_blank"
											download
											className="inline-block mt-3 text-sm text-primary hover:underline"
										>
										📥 Download Typescript
										</a>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
										<div>
											<CardTitle className="text-xl">
												Google Cloud Professional Data Engineer
											</CardTitle>
											<CardDescription className="text-base font-medium text-primary">
												Google Cloud
											</CardDescription>
										</div>
										<div className="flex items-center gap-2 text-sm text-primary">
											<Calendar className="w-4 h-4" />
											<time dateTime="2021">Issued 2021</time>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-primary">
										Demonstrated expertise in designing, building, and managing data
										processing systems on Google Cloud Platform.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<Separator />

				<section id="about" className="py-20 px-4">
					<div className="container mx-auto max-w-4xl">
						<div className="text-center mb-12">
							<User className="w-12 h-12 mx-auto mb-4 text-primary" />
							<h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.title")}</h2>
							<p className="text-lg text-primary">
								{t("about.subtitle")}
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 mb-12">
							<Card>
								<CardHeader>
								<CardTitle className="text-lg">{t("about.personal_valies.title")}</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">{t("about.personal_valies.t1")}</h4>
									<p className="text-sm text-primary">
									{t("about.personal_valies.p1")}
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">{t("about.personal_valies.t2")}</h4>
									<p className="text-sm text-primary">
									{t("about.personal_valies.p2")}
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">{t("about.personal_valies.t3")}</h4>
									<p className="text-sm text-primary">
									{t("about.personal_valies.p3")}
									</p>
								</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
								<CardTitle className="text-lg">{t("about.working_style.title")}</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">{t("about.working_style.t1")}</h4>
									<p className="text-sm text-primary">
									{t("about.working_style.p1")}
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">{t("about.working_style.t2")}</h4>
									<p className="text-sm text-primary">
									{t("about.working_style.p2")}
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">{t("about.working_style.t3")}</h4>
									<p className="text-sm text-primary">
									{t("about.working_style.p3")}
									</p>
								</div>
								</CardContent>
							</Card>
							</div>


						<Card>
							<CardHeader>
								<CardTitle className="text-lg">{t("about.beyond_title")}</CardTitle>
								<CardDescription>
									{t("about.beyond_subtitle")}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-3 gap-6">
									<div className="text-center">
									<div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
										<span className="text-2xl" role="img" aria-label="Travelling">
										✈️
										</span>
									</div>
									<h4 className="font-semibold mb-2">{t("about.travel_title")}</h4>
									<p className="text-sm text-primary">
										{t("about.travel_description")}
									</p>
									</div>
									<div className="text-center">
									<div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
										<span className="text-2xl" role="img" aria-label="Family">
										👨‍👩‍👧‍👦
										</span>
									</div>
									<h4 className="font-semibold mb-2">{t('about.family_title')}</h4>
									<p className="text-sm text-primary">
										{t('about.family_description')}
									</p>
									</div>
									<div className="text-center">
									<div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
										<span className="text-2xl" role="img" aria-label="Chess">
										♟️
										</span>
									</div>
									<h4 className="font-semibold mb-2">{t('about.chess_title')}</h4>
									<p className="text-sm text-primary">
										{t('about.chess_description')}
									</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<div className="text-center mt-12">
							<Card className="inline-block">
								<CardContent className="p-6">
									<h3 className="text-lg font-semibold mb-2">
										{t("about.lets_connect")}
									</h3>
									<p className="text-primary mb-4">
										{t("about.connect_subtitle")}
									</p>
									<div className="flex justify-center gap-4">
										<Button asChild>
											<Link href="mailto:lucssslucsss@gmail.com">
												<Mail className="w-4 h-4 mr-2" />
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

				<footer className="py-8 px-4 border-t bg-primary">
					<div className="container mx-auto max-w-4xl text-center">
						<p className="text-secondary">
							© 2025 Lucas S. Salgado. Built with Next.js and Tailwind CSS.
						</p>
						<BackToTopLink />
					</div>
				</footer>
			</div>
		);
	}
