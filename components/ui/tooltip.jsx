
import { useState } from "react";

export function Tooltip({ content, children }) {
	const [visible, setVisible] = useState(false);

	return (
		<div
			className="relative inline-block"
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
		>
			{children}
			{visible && (
				<div className="absolute bottom-full mb-2 w-max px-2 py-1 bg-black text-white text-sm rounded">
					{content}
				</div>
			)}
		</div>
	);
}