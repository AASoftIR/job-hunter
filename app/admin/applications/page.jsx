"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

// Simulated API call
const getApplications = async () => {
	// This would be replaced with an actual API call
	return [
		{
			userId: 1,
			jobId: 1,
			status: "pending",
			job: {
				id: 1,
				title: "Software Engineer",
				company: "Tech Co",
				location: "San Francisco, CA",
				description: "...",
				salary: "$120,000 - $160,000",
			},
			user: { id: 1, name: "John Doe", email: "john@example.com" },
		},
		{
			userId: 2,
			jobId: 2,
			status: "approved",
			job: {
				id: 2,
				title: "Product Manager",
				company: "Startup Inc",
				location: "New York, NY",
				description: "...",
				salary: "$100,000 - $140,000",
			},
			user: { id: 2, name: "Jane Smith", email: "jane@example.com" },
		},
		{
			userId: 3,
			jobId: 3,
			status: "rejected",
			job: {
				id: 3,
				title: "Data Scientist",
				company: "Big Data Corp",
				location: "Seattle, WA",
				description: "...",
				salary: "$130,000 - $180,000",
			},
			user: { id: 3, name: "Bob Johnson", email: "bob@example.com" },
		},
	];
};

export default function AdminApplications() {
	const [applications, setApplications] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchApplications = async () => {
			setLoading(true);
			const fetchedApplications = await getApplications();
			setApplications(fetchedApplications);
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
			className="space-y-6"
		>
			<h1 className="text-3xl font-bold">Manage Applications</h1>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className="rounded-md border">
					<Table>
						<TableCaption>A list of all job applications</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead>Applicant</TableHead>
								<TableHead>Job</TableHead>
								<TableHead>Company</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{applications.map((app) => (
								<TableRow key={`${app.userId}-${app.jobId}`}>
									<TableCell className="font-medium">{app.user.name}</TableCell>
									<TableCell>{app.job.title}</TableCell>
									<TableCell>{app.job.company}</TableCell>
									<TableCell>{app.status}</TableCell>
									<TableCell className="text-right">
										<Button variant="outline" size="sm">
											View
										</Button>
										<Button variant="default" size="sm" className="ml-2">
											Approve
										</Button>
										<Button variant="destructive" size="sm" className="ml-2">
											Reject
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			)}
		</motion.div>
	);
}
