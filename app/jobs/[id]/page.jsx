"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { getJobDetails } from "@/utils/api";

export default function JobDetails() {
	const { id } = useParams();
	const router = useRouter();
	const [job, setJob] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchJobDetails = async () => {
			if (id) {
				setLoading(true);
				const jobDetails = await getJobDetails(id);
				setJob(jobDetails);
				setLoading(false);
			}
		};
		fetchJobDetails();
	}, [id]);

	const handleApply = () => {
		// In a real app, this would navigate to a payment page
		alert("Redirecting to payment page...");
		// After payment, you would typically redirect to an application form
		router.push(`/jobs/${id}/pay`);
	};

	if (loading) {
		return (
			<div className="container mx-auto px-4 py-8 flex justify-center items-center h-64">
				<Loader2 className="h-8 w-8 animate-spin" />
			</div>
		);
	}

	if (!job) {
		return <div className="container mx-auto px-4 py-8">Job not found</div>;
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Card className="max-w-3xl mx-auto">
					<CardHeader>
						<CardTitle className="text-3xl">{job.title}</CardTitle>
						<p className="text-xl text-muted-foreground">{job.company}</p>
					</CardHeader>
					<CardContent className="space-y-4">
						<div>
							<h2 className="text-xl font-semibold mb-2">Location</h2>
							<p>{job.location}</p>
						</div>
						<div>
							<h2 className="text-xl font-semibold mb-2">Salary</h2>
							<p>{job.salary}</p>
						</div>
						<div>
							<h2 className="text-xl font-semibold mb-2">Description</h2>
							<p>{job.description}</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button size="lg" onClick={handleApply}>
							Apply Now (Requires Payment)
						</Button>
					</CardFooter>
				</Card>
			</motion.div>
		</div>
	);
}
