"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
export default function ContactUs() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		console.log("Form submitted:", formData);
		alert("Thank you for your message. We'll get back to you soon!");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-4 py-8"
		>
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-6">Contact Us</h1>
				<div className="grid gap-6 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Send us a message</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700"
									>
										Name
									</label>
									<Input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email
									</label>
									<Input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700"
									>
										Message
									</label>
									<Textarea
										id="message"
										name="message"
										rows={4}
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</div>
								<Button type="submit">Send Message</Button>
							</form>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Contact Information</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="mb-2">
								<strong>Address:</strong> 123 Job Hunter St, San Francisco, CA
								94105
							</p>
							<p className="mb-2">
								<strong>Phone:</strong> (555) 123-4567
							</p>
							<p className="mb-2">
								<strong>Email:</strong> info@jobhunter.com
							</p>
							<p className="mb-2">
								<strong>Hours:</strong> Monday - Friday, 9am - 5pm PST
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</motion.div>
	);
}
