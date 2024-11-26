"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		// TODO: Implement signup logic here
		console.log("Signup attempt with:", { name, email, password });
		// Redirect to dashboard after successful signup
		router.push("/dashboard");
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.9 }}
			className="flex justify-center items-center min-h-[calc(100vh-3.5rem)]"
		>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
					<CardDescription>
						Create your account to start job hunting
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									placeholder="Enter your full name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									placeholder="Create a password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="confirm-password">Confirm Password</Label>
								<Input
									id="confirm-password"
									type="password"
									placeholder="Confirm your password"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
									required
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline" asChild>
						<Link href="/login">Login</Link>
					</Button>
					<Button type="submit" onClick={handleSubmit}>
						Sign Up
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
