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
import { Tooltip } from "@/components/ui/tooltip"; // Import Tooltip component
import Modal from "@/components/ui/modal"; // Import Modal component

export default function JobDetails() {
	const { id } = useParams();
	const router = useRouter();
	const [job, setJob] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

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
		setIsModalOpen(true); // Open modal
	};

	const handleModalClose = () => {
		setIsModalOpen(false); // Close modal
		router.push(`/jobs/${id}/pay`); // Redirect to payment page
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
							<h2 className="text-xl font-semibold mb-2">Description</h2>
							<p>{job.description}</p>
						</div>
						<div>
							<h2 className="text-xl font-semibold mb-2">Location</h2>
							<p>{job.location}</p>
						</div>
						<div>
							<h2 className="text-xl font-semibold mb-2">Salary</h2>
							<p>{job.salary}</p>
						</div>
						<div>
							<h2 className="text-xl font-semibold mb-2">Job Type</h2>
							<p>{job.jobType}</p>
						</div>
						<div>
							<h2 className="text-xl font-semibold mb-2">Requirements</h2>
							<div className="flex flex-wrap gap-2">
								{job.requirements.map((requirement, index) => (
									<span
										key={index}
										className="bg-zinc-500 px-3 py-2 rounded-lg hover:bg-zinc-800 duration-300 hover:cursor-pointer"
									>
										{requirement}
									</span>
								))}
							</div>
						</div>
						<div>
							<h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
							<div className="flex gap-4">
								{job.paymentMethods.map((method, index) => (
									<Tooltip key={index} content={method}>
										<img
											src={`/icons/${method
												.toLowerCase()
												.replace(" ", "_")}.svg`}
											alt={method}
											className="h-8 w-8 cursor-pointer"
										/>
									</Tooltip>
								))}
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button
							className="block w-full rounded-xl transition-all duration-500 hover:bg-black/60"
							size="lg"
							onClick={handleApply}
						>
							Apply Now (Requires Payment)
						</Button>
					</CardFooter>
				</Card>
			</motion.div>
			<Modal isOpen={isModalOpen} onClose={handleModalClose}>
				<h2>Redirecting to payment page...</h2>
			</Modal>
		</div>
	);
}
