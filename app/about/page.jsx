"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
export default function AboutUs() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className="container mx-auto px-4 py-8"
		>
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-6">About Job Hunter</h1>
				<div className="grid gap-6 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Our Mission</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								At Job Hunter, we're dedicated to connecting talented
								individuals with their dream jobs. Our platform simplifies the
								job search process, making it easier for job seekers to find
								opportunities that match their skills and aspirations.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Our Team</CardTitle>
						</CardHeader>
						<CardContent>
							<p>
								We're a diverse group of professionals passionate about
								revolutionizing the job market. With backgrounds in technology,
								recruitment, and user experience, we're committed to creating
								the best job search platform possible.
							</p>
						</CardContent>
					</Card>
				</div>
				<div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">Testimonials</h2>
					<div className="grid gap-6 md:grid-cols-3">
						{[
							{
								name: "Sarah J.",
								text: "Job Hunter helped me land my dream job in just two weeks!",
							},
							{
								name: "Mike T.",
								text: "The user-friendly interface made job searching a breeze.",
							},
							{
								name: "Emily R.",
								text: "I love how Job Hunter tailors job recommendations to my skills.",
							},
						].map((testimonial, index) => (
							<Card key={index}>
								<CardContent className="pt-6">
									<p className="italic mb-2">"{testimonial.text}"</p>
									<p className="font-semibold">- {testimonial.name}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
