import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/mobile-nav";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex min-h-screen flex-col">
						<header className="bg-background border-b">
							<div className="container mx-auto px-4 py-4 flex justify-between items-center">
								<Link href="/" className="text-2xl font-bold">
									Job Hunter
								</Link>
								<nav className="hidden md:flex space-x-4 items-center">
									<Button asChild variant="ghost">
										<Link href="/jobs">Find Jobs</Link>
									</Button>
									<Button asChild variant="ghost">
										<Link href="/dashboard">Dashboard</Link>
									</Button>
									<Button asChild variant="ghost">
										<Link href="/about">About Us</Link>
									</Button>
									<Button asChild variant="ghost">
										<Link href="/contact">Contact</Link>
									</Button>
									<Button asChild variant="ghost">
										<Link href="/login">Login / Sign Up</Link>
									</Button>
									<ModeToggle />
								</nav>
								<MobileNav />
							</div>
						</header>
						<main className="flex-1">{children}</main>
						<footer className="bg-background border-t">
							<div className="container mx-auto px-4 py-4 text-center">
								© 2024 Job Hunter. All rights reserved.
							</div>
						</footer>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
