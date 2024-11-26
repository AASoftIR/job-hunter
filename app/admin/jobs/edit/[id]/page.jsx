"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getJobDetails } from "@/utils/api";

export default function EditJob() {
	const { id } = useParams();
	const router = useRouter();
	const [job, setJob] = useState(null);

	useEffect(() => {
		const fetchJob = async () => {
			if (id) {
				const jobDetails = await getJobDetails(id);
				setJob(jobDetails);
			}
		};
		fetchJob();
	}, [id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would typically update the job in your backend
		console.log("Job updated:", job);
		alert("Job updated successfully!");
		router.push("/admin/jobs");
	};

	if (!job) {
		return <div>Loading...</div>;
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<Card>
				<CardHeader>
					<CardTitle>Edit Job</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="title"
								className="block text-sm font-medium text-gray-700"
							>
								Title
							</label>
							<Input
								type="text"
								id="title"
								value={job.title}
								onChange={(e) => setJob({ ...job, title: e.target.value })}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="company"
								className="block text-sm font-medium text-gray-700"
							>
								Company
							</label>
							<Input
								type="text"
								id="company"
								value={job.company}
								onChange={(e) => setJob({ ...job, company: e.target.value })}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="location"
								className="block text-sm font-medium text-gray-700"
							>
								Location
							</label>
							<Input
								type="text"
								id="location"
								value={job.location}
								onChange={(e) => setJob({ ...job, location: e.target.value })}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="salary"
								className="block text-sm font-medium text-gray-700"
							>
								Salary
							</label>
							<Input
								type="text"
								id="salary"
								value={job.salary}
								onChange={(e) => setJob({ ...job, salary: e.target.value })}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="description"
								className="block text-sm font-medium text-gray-700"
							>
								Description
							</label>
							<Textarea
								id="description"
								value={job.description}
								onChange={(e) =>
									setJob({ ...job, description: e.target.value })
								}
								required
							/>
						</div>
						<Button type="submit">Update Job</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
