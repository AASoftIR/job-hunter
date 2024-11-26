"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="container mx-auto px-4 py-16 text-center">
			<h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
			<p className="text-xl mb-8">
				We're sorry, but there was an error processing your request.
			</p>
			<Button onClick={() => reset()}>Try again</Button>
		</div>
	);
}
