export const mockJobs = [
	{
		id: "1",
		title: "Software Engineer",
		company: "Tech Co",
		location: "San Francisco, CA",
		salary: "$120,000 - $160,000",
		description:
			"We are seeking a talented Software Engineer to join our team...",
		jobType: "Full Time",
		paymentMethods: ["Bank Transfer", "PayPal"],
		requirements: ["React 3 years", "Node.js 2 years"],
	},
	{
		id: "2",
		title: "Product Manager",
		company: "Startup Inc",
		location: "New York, NY",
		salary: "$100,000 - $140,000",
		description: "Join our fast-paced startup as a Product Manager...",
		jobType: "Full Time",
		paymentMethods: ["Bank Transfer", "PayPal"],
		requirements: ["Agile Methodology 2 years", "Leadership 3 years"],
	},
	{
		id: "3",
		title: "Data Scientist",
		company: "Big Data Corp",
		location: "Seattle, WA",
		salary: "$130,000 - $180,000",
		description:
			"We're looking for a Data Scientist to help us unlock insights from our vast datasets...",
		jobType: "Full Time",
		paymentMethods: ["Bank Transfer", "PayPal"],
		requirements: ["Python 3 years", "Machine Learning 2 years"],
	},
	{
		id: "4",
		title: "UX Designer",
		company: "Design Studio",
		location: "Los Angeles, CA",
		salary: "$90,000 - $120,000",
		description: "Help us create beautiful and intuitive user experiences...",
		jobType: "Full Time",
		paymentMethods: ["Bank Transfer", "PayPal"],
		requirements: ["Sketch 2 years", "User Research 3 years"],
	},
	{
		id: "5",
		title: "DevOps Engineer",
		company: "Cloud Services Ltd",
		location: "Austin, TX",
		salary: "$110,000 - $150,000",
		description:
			"Join our DevOps team to build and maintain our cloud infrastructure...",
		jobType: "Full Time",
		paymentMethods: ["Bank Transfer", "PayPal"],
		requirements: ["AWS 3 years", "CI/CD 2 years"],
	},
];

export const mockApplications = [
	{
		id: "1",
		userId: "1",
		jobId: "1",
		status: "Pending",
		appliedDate: "2023-06-01",
	},
	{
		id: "2",
		userId: "1",
		jobId: "2",
		status: "Reviewed",
		appliedDate: "2023-05-15",
	},
	{
		id: "3",
		userId: "1",
		jobId: "3",
		status: "Interviewed",
		appliedDate: "2023-05-20",
	},
];

export const mockUsers = [
	{ id: "1", name: "John Doe", email: "john@example.com" },
	{ id: "2", name: "Jane Smith", email: "jane@example.com" },
];
