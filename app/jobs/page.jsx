"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { searchJobs, getAllJobs } from "@/utils/api";

export default function JobSearch() {
	const [searchTerm, setSearchTerm] = useState("");
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchInitialJobs = async () => {
			setLoading(true);
			const initialJobs = await getAllJobs();
			setJobs(initialJobs);
			setLoading(false);
		};
		fetchInitialJobs();
	}, []);

	const handleSearch = async (e) => {
		e.preventDefault();
		setLoading(true);
		const results = await searchJobs(searchTerm);
		setJobs(results);
		setLoading(false);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Find Jobs</h1>
			<form onSubmit={handleSearch} className="mb-8">
				<div className="flex flex-col sm:flex-row gap-4">
					<Input
						type="text"
						placeholder="Search jobs..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="flex-grow"
					/>
					<Button type="submit">Search</Button>
				</div>
			</form>
			<AnimatePresence>
				{loading ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="flex justify-center items-center h-64"
					>
						<Loader2 className="h-8 w-8 animate-spin" />
					</motion.div>
				) : (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
					>
						{jobs.map((job) => (
							<Card key={job.id}>
								<CardHeader>
									<CardTitle>{job.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground mb-2">
										{job.company}
									</p>
									<p className="text-sm mb-2">{job.location}</p>
									<p className="text-sm">{job.salary}</p>
								</CardContent>
								<CardFooter>
									<Button asChild>
										<Link href={`/jobs/${job.id}`}>View Details</Link>
									</Button>
								</CardFooter>
							</Card>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
