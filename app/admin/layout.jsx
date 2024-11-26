import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }) {
	return (
		<div className="flex h-screen bg-background">
			<aside className="w-64 border-r">
				<div className="p-4 border-b">
					<h2 className="text-lg font-semibold">Admin Panel</h2>
				</div>
				<nav className="p-4 space-y-2">
					<Button asChild variant="ghost" className="w-full justify-start">
						<Link href="/admin">Dashboard</Link>
					</Button>
					<Button asChild variant="ghost" className="w-full justify-start">
						<Link href="/admin/users">Users</Link>
					</Button>
					<Button asChild variant="ghost" className="w-full justify-start">
						<Link href="/admin/jobs">Jobs</Link>
					</Button>
					<Button asChild variant="ghost" className="w-full justify-start">
						<Link href="/admin/applications">Applications</Link>
					</Button>
				</nav>
			</aside>
			<main className="flex-1 p-8 overflow-y-auto">{children}</main>
		</div>
	);
}
