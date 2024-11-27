// components/Modal.jsx
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0.8, scale: 0.8 }}
				transition={{ duration: 0.3 }}
				className=" rounded-lg shadow-lg p-6 max-w-lg w-full border border-gray-500"
			>
				<div className="mb-4">{children}</div>
				<div className="flex justify-end">
					<Button
						onClick={onClose}
						className="bg-blue-500 text-white block w-full font-bold"
					>
						Proceed
					</Button>
				</div>
			</motion.div>
		</div>
	);
};

export default Modal;
