"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getUserApplications } from "@/utils/api";
import { Loader2 } from "lucide-react";
export default function Dashboard() {
	const [applications, setApplications] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchApplications = async () => {
			setLoading(true);
			// In a real app, you'd get the user ID from the authenticated session
			const userApplications = await getUserApplications("1");
			setApplications(userApplications);
			setLoading(false);
		};
		fetchApplications();
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-4 py-8"
		>
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
				{loading ? (
					<div className="flex justify-center items-center h-64">
						<Loader2 className="h-8 w-8 animate-spin" />
					</div>
				) : (
					<Card>
						<CardHeader>
							<CardTitle>Your Job Applications</CardTitle>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Job Title</TableHead>
										<TableHead>Company</TableHead>
										<TableHead>Applied Date</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Action</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{applications.map((application) => (
										<TableRow key={application.id}>
											<TableCell>{application.job.title}</TableCell>
											<TableCell>{application.job.company}</TableCell>
											<TableCell>{application.appliedDate}</TableCell>
											<TableCell>{application.status}</TableCell>
											<TableCell>
												<Button asChild variant="outline" size="sm">
													<Link href={`/jobs/${application.jobId}`}>
														View Job
													</Link>
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				)}
			</div>
		</motion.div>
	);
}
