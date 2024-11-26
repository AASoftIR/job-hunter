"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { applyForJob } from "@/utils/api";

export default function ApplicationPage({ params }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [resume, setResume] = useState(null);
	const [coverLetter, setCoverLetter] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		// TODO: Implement actual user authentication
		const userId = 1; // Simulated user ID
		const jobId = parseInt(params.id);
		const success = await applyForJob(userId, jobId);
		setSubmitting(false);
		if (success) {
			alert("Application submitted successfully!");
			router.push("/dashboard");
		} else {
			alert("You have already applied for this job.");
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-4 py-8"
		>
			<Card className="w-full max-w-2xl mx-auto">
				<CardHeader>
					<CardTitle>Job Application</CardTitle>
					<CardDescription>
						Please fill out the form below to apply for this position.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Full Name</Label>
							<Input
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">Phone Number</Label>
							<Input
								id="phone"
								type="tel"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="resume">Resume</Label>
							<Input
								id="resume"
								type="file"
								onChange={(e) =>
									setResume(e.target.files ? e.target.files[0] : null)
								}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="coverLetter">Cover Letter</Label>
							<Textarea
								id="coverLetter"
								value={coverLetter}
								onChange={(e) => setCoverLetter(e.target.value)}
								rows={5}
								required
							/>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline" onClick={() => router.back()}>
						Back
					</Button>
					<Button type="submit" onClick={handleSubmit} disabled={submitting}>
						{submitting ? "Submitting..." : "Submit Application"}
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
