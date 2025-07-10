import { getTranslations, setRequestLocale } from "next-intl/server";
import {
	Code,
	Briefcase,
	User,
	Calendar,
	MapPin,
	Mail,
	Github,
	Linkedin,
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
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import BackToTopButton from "@/components/shared/BackToTopBtn";
import BackToTopLink from "@/components/shared/BackToTopLink";

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	setRequestLocale(locale);

	const t = await getTranslations("HomePage");

	return (
		<div id="top" className="min-h-screen bg-background">
			<Navbar />

			{/* Hero Section */}
			<section className="py-20 px-4 text-center bg-gradient-to-br from-background to-muted/20">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-8">
						<div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
							<User className="w-16 h-16 text-primary" />
						</div>
						<h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							{t("title")}
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground mb-6">
							Full Stack Developer & UI/UX Enthusiast
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<MapPin className="w-4 h-4" />
								<span>San Francisco, CA</span>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="w-4 h-4" />
								<span>john@example.com</span>
							</div>
						</div>
					</div>
					<div className="flex justify-center gap-4">
						<Button variant="outline" size="sm" asChild>
							<Link
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="w-4 h-4 mr-2" />
								GitHub
							</Link>
						</Button>
						<Button variant="outline" size="sm" asChild>
							<Link
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin className="w-4 h-4 mr-2" />
								LinkedIn
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="py-20 px-4">
				<div className="container mx-auto max-w-4xl">
					<div className="text-center mb-12">
						<Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
						<p className="text-lg text-muted-foreground">
							My professional journey and key accomplishments
						</p>
					</div>

					<div className="space-y-8">
						<Card>
							<CardHeader>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
									<div>
										<CardTitle className="text-xl">
											Senior Full Stack Developer
										</CardTitle>
										<CardDescription className="text-base font-medium text-primary">
											TechCorp Solutions
										</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="w-4 h-4" />
										<time dateTime="2022">2022 - Present</time>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-muted-foreground">
									<li>
										• Led development of microservices architecture serving
										100k+ daily users
									</li>
									<li>
										• Implemented CI/CD pipelines reducing deployment time by
										60%
									</li>
									<li>
										• Mentored 5 junior developers and conducted code reviews
									</li>
									<li>
										• Built responsive web applications using React, Node.js,
										and PostgreSQL
									</li>
								</ul>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge variant="secondary">React</Badge>
									<Badge variant="secondary">Node.js</Badge>
									<Badge variant="secondary">PostgreSQL</Badge>
									<Badge variant="secondary">AWS</Badge>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
									<div>
										<CardTitle className="text-xl">
											Frontend Developer
										</CardTitle>
										<CardDescription className="text-base font-medium text-primary">
											StartupXYZ
										</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="w-4 h-4" />
										<time dateTime="2020/2022">2020 - 2022</time>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-muted-foreground">
									<li>
										• Developed and maintained 15+ React components in design
										system
									</li>
									<li>
										• Improved application performance by 40% through code
										optimization
									</li>
									<li>
										• Collaborated with UX team to implement pixel-perfect
										designs
									</li>
									<li>• Integrated third-party APIs and payment gateways</li>
								</ul>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge variant="secondary">React</Badge>
									<Badge variant="secondary">TypeScript</Badge>
									<Badge variant="secondary">Tailwind CSS</Badge>
									<Badge variant="secondary">Jest</Badge>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
									<div>
										<CardTitle className="text-xl">
											Junior Web Developer
										</CardTitle>
										<CardDescription className="text-base font-medium text-primary">
											Digital Agency Pro
										</CardDescription>
									</div>
									<div className="flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="w-4 h-4" />
										<time dateTime="2019/2020">2019 - 2020</time>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-muted-foreground">
									<li>
										• Built responsive websites for 20+ clients using HTML, CSS,
										and JavaScript
									</li>
									<li>
										• Implemented SEO best practices improving search rankings
										by 30%
									</li>
									<li>
										• Maintained WordPress sites and custom PHP applications
									</li>
									<li>• Provided technical support and training to clients</li>
								</ul>
								<div className="flex flex-wrap gap-2 mt-4">
									<Badge variant="secondary">HTML/CSS</Badge>
									<Badge variant="secondary">JavaScript</Badge>
									<Badge variant="secondary">WordPress</Badge>
									<Badge variant="secondary">PHP</Badge>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Separator />

			{/* Technologies Section */}
			<section id="technologies" className="py-20 px-4">
				<div className="container mx-auto max-w-4xl">
					<div className="text-center mb-12">
						<Code className="w-12 h-12 mx-auto mb-4 text-primary" />
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Technologies
						</h2>
						<p className="text-lg text-muted-foreground">
							Tools and technologies I work with
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
										<Badge>Expert</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>TypeScript</span>
										<Badge>Advanced</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>Tailwind CSS</span>
										<Badge>Expert</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>Vue.js</span>
										<Badge variant="secondary">Intermediate</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>SASS/SCSS</span>
										<Badge>Advanced</Badge>
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
										<Badge>Expert</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>Express.js</span>
										<Badge>Advanced</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>Python</span>
										<Badge>Advanced</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>PostgreSQL</span>
										<Badge>Advanced</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>MongoDB</span>
										<Badge variant="secondary">Intermediate</Badge>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-lg">DevOps & Tools</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									<div className="flex justify-between items-center">
										<span>AWS</span>
										<Badge>Advanced</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>Docker</span>
										<Badge>Advanced</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>Git</span>
										<Badge>Expert</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>CI/CD</span>
										<Badge>Advanced</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span>Kubernetes</span>
										<Badge variant="secondary">Intermediate</Badge>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="mt-12">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Recent Projects</CardTitle>
								<CardDescription>Some of my latest work</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-2 gap-6">
									<article className="space-y-2">
										<h4 className="font-semibold">E-commerce Platform</h4>
										<p className="text-sm text-muted-foreground">
											Full-stack e-commerce solution with payment integration,
											inventory management, and admin dashboard.
										</p>
										<div className="flex flex-wrap gap-1">
											<Badge variant="outline" className="text-xs">
												Next.js
											</Badge>
											<Badge variant="outline" className="text-xs">
												Stripe
											</Badge>
											<Badge variant="outline" className="text-xs">
												PostgreSQL
											</Badge>
										</div>
									</article>
									<article className="space-y-2">
										<h4 className="font-semibold">Task Management App</h4>
										<p className="text-sm text-muted-foreground">
											Collaborative task management tool with real-time updates,
											team collaboration, and analytics.
										</p>
										<div className="flex flex-wrap gap-1">
											<Badge variant="outline" className="text-xs">
												React
											</Badge>
											<Badge variant="outline" className="text-xs">
												Socket.io
											</Badge>
											<Badge variant="outline" className="text-xs">
												Node.js
											</Badge>
										</div>
									</article>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Separator />

			{/* About Section */}
			<section id="about" className="py-20 px-4">
				<div className="container mx-auto max-w-4xl">
					<div className="text-center mb-12">
						<User className="w-12 h-12 mx-auto mb-4 text-primary" />
						<h2 className="text-3xl md:text-4xl font-bold mb-4">How am I</h2>
						<p className="text-lg text-muted-foreground">
							Get to know me better - my personality, values, and what drives me
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 mb-12">
						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Personal Values</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">🎯 Problem Solver</h4>
									<p className="text-sm text-muted-foreground">
										I thrive on tackling complex challenges and finding elegant
										solutions. Every bug is a puzzle waiting to be solved.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">🤝 Team Player</h4>
									<p className="text-sm text-muted-foreground">
										Collaboration is key to great software. I believe in sharing
										knowledge, mentoring others, and learning from my peers.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">📚 Continuous Learner</h4>
									<p className="text-sm text-muted-foreground">
										Technology evolves rapidly, and so do I. I&apos;m always
										exploring new frameworks, tools, and best practices.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-lg">Work Style</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">🔍 Detail-Oriented</h4>
									<p className="text-sm text-muted-foreground">
										I believe great software is in the details. From clean code
										to pixel-perfect UIs, quality matters.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">⚡ Agile Mindset</h4>
									<p className="text-sm text-muted-foreground">
										I embrace iterative development, quick feedback loops, and
										adapting to changing requirements.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">🎨 User-Focused</h4>
									<p className="text-sm text-muted-foreground">
										Every line of code I write serves a user. I prioritize user
										experience and accessibility in all my projects.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>

					<Card>
						<CardHeader>
							<CardTitle className="text-lg">Beyond Code</CardTitle>
							<CardDescription>
								What I do when I&apos;m not coding
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid md:grid-cols-3 gap-6">
								<div className="text-center">
									<div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
										<span className="text-2xl" role="img" aria-label="Running">
											🏃‍♂️
										</span>
									</div>
									<h4 className="font-semibold mb-2">Running</h4>
									<p className="text-sm text-muted-foreground">
										Marathon runner who finds clarity and inspiration on long
										runs. Currently training for my 5th marathon.
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
										<span
											className="text-2xl"
											role="img"
											aria-label="Photography"
										>
											📸
										</span>
									</div>
									<h4 className="font-semibold mb-2">Photography</h4>
									<p className="text-sm text-muted-foreground">
										Capturing moments and landscapes. Photography teaches me to
										see details and composition - skills that transfer to UI
										design.
									</p>
								</div>
								<div className="text-center">
									<div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
										<span className="text-2xl" role="img" aria-label="Music">
											🎸
										</span>
									</div>
									<h4 className="font-semibold mb-2">Music</h4>
									<p className="text-sm text-muted-foreground">
										Playing guitar and producing electronic music. Music and
										code both require rhythm, structure, and creativity.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<div className="text-center mt-12">
						<Card className="inline-block">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold mb-2">
									Let&apos;s Connect!
								</h3>
								<p className="text-muted-foreground mb-4">
									I&apos;m always open to discussing new opportunities,
									interesting projects, or just having a chat about technology.
								</p>
								<div className="flex justify-center gap-4">
									<Button asChild>
										<Link href="mailto:john@example.com">
											<Mail className="w-4 h-4 mr-2" />
											Get in Touch
										</Link>
									</Button>
									<Button variant="outline" asChild>
										<Link
											href="/resume.pdf"
											target="_blank"
											rel="noopener noreferrer"
										>
											Download Resume
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Back to Top Button */}
			<BackToTopButton />

			{/* Footer */}
			<footer className="py-8 px-4 border-t bg-muted/30">
				<div className="container mx-auto max-w-4xl text-center">
					<p className="text-muted-foreground">
						© 2024 John Developer. Built with Next.js and Tailwind CSS.
					</p>
					<BackToTopLink />
				</div>
			</footer>
		</div>
	);
}
