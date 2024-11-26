"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { processPayment } from "@/utils/api";

export default function PaymentPage({ params }) {
	const [cardNumber, setCardNumber] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [processing, setProcessing] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		// Simulated payment amount
		const paymentSuccess = await processPayment(50);
		setProcessing(false);
		if (paymentSuccess) {
			router.push(`/jobs/${params.id}/apply`);
		} else {
			alert("Payment failed. Please try again.");
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
			<Card className="w-full max-w-md mx-auto">
				<CardHeader>
					<CardTitle>Payment Details</CardTitle>
					<CardDescription>
						Please enter your payment information to proceed with the
						application.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="cardNumber">Card Number</Label>
							<Input
								id="cardNumber"
								placeholder="1234 5678 9012 3456"
								value={cardNumber}
								onChange={(e) => setCardNumber(e.target.value)}
								required
							/>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="expiryDate">Expiry Date</Label>
								<Input
									id="expiryDate"
									placeholder="MM/YY"
									value={expiryDate}
									onChange={(e) => setExpiryDate(e.target.value)}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="cvv">CVV</Label>
								<Input
									id="cvv"
									placeholder="123"
									value={cvv}
									onChange={(e) => setCvv(e.target.value)}
									required
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline" onClick={() => router.back()}>
						Back
					</Button>
					<Button type="submit" onClick={handleSubmit} disabled={processing}>
						{processing ? "Processing..." : "Pay and Continue"}
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
}
