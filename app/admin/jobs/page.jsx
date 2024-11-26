"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { searchJobs } from "@/utils/api";

export default function AdminJobs() {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	useEffect(() => {
		const fetchJobs = async () => {
			setLoading(true);
			const fetchedJobs = await searchJobs("");
			setJobs(fetchedJobs);
			setLoading(false);
		};

		fetchJobs();
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className="space-y-6"
		>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl font-bold">Manage Jobs</h1>
				<Button>Create New Job</Button>
			</div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className="rounded-md border">
					<Table>
						<TableCaption>A list of all job listings</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">ID</TableHead>
								<TableHead>Title</TableHead>
								<TableHead>Company</TableHead>
								<TableHead>Location</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{jobs.map((job) => (
								<TableRow key={job.id}>
									<TableCell className="font-medium">{job.id}</TableCell>
									<TableCell>{job.title}</TableCell>
									<TableCell>{job.company}</TableCell>
									<TableCell>{job.location}</TableCell>
									<TableCell className="text-right">
										<Button
											variant="outline"
											size="sm"
											onClick={() => router.push(`/admin/jobs/edit/${job.id}`)}
										>
											Edit
										</Button>
										<Button variant="destructive" size="sm" className="ml-2">
											Delete
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
