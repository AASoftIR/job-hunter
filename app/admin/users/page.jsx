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
const getUsers = async () => {
	// This would be replaced with an actual API call
	return [
		{ id: 1, name: "John Doe", email: "john@example.com" },
		{ id: 2, name: "Jane Smith", email: "jane@example.com" },
		{ id: 3, name: "Bob Johnson", email: "bob@example.com" },
	];
};

export default function AdminUsers() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUsers = async () => {
			setLoading(true);
			const fetchedUsers = await getUsers();
			setUsers(fetchedUsers);
			setLoading(false);
		};

		fetchUsers();
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5 }}
			className="space-y-6"
		>
			<h1 className="text-3xl font-bold">Manage Users</h1>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className="rounded-md border">
					<Table>
						<TableCaption>A list of all registered users</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">ID</TableHead>
								<TableHead>Name</TableHead>
								<TableHead>Email</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{users.map((user) => (
								<TableRow key={user.id}>
									<TableCell className="font-medium">{user.id}</TableCell>
									<TableCell>{user.name}</TableCell>
									<TableCell>{user.email}</TableCell>
									<TableCell className="text-right">
										<Button variant="outline" size="sm">
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
