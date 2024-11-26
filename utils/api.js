import { mockJobs, mockApplications, mockUsers } from "./mockData";

export async function searchJobs(query) {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return mockJobs.filter(
		(job) =>
			job.title.toLowerCase().includes(query.toLowerCase()) ||
			job.company.toLowerCase().includes(query.toLowerCase()) ||
			job.location.toLowerCase().includes(query.toLowerCase())
	);
}

export async function getJobDetails(id) {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 500));
	return mockJobs.find((job) => job.id === id) || null;
}

export async function getUserApplications(userId) {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 800));
	return mockApplications
		.filter((app) => app.userId === userId)
		.map((app) => ({
			...app,
			job: mockJobs.find((job) => job.id === app.jobId) || {},
		}));
}

export async function getAllJobs() {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return mockJobs;
}

export async function getAllApplications() {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return mockApplications.map((app) => ({
		...app,
		job: mockJobs.find((job) => job.id === app.jobId) || {},
		user: mockUsers.find((user) => user.id === app.userId) || {},
	}));
}

export async function getAllUsers() {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return mockUsers;
}

export async function processPayment() {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return true;
}

export async function applyToJob(userId, jobId) {
	// Simulate API delay
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const application = {
		id: mockApplications.length + 1,
		userId,
		jobId,
		date: new Date().toISOString(),
	};
	mockApplications.push(application);
	return application;
}
