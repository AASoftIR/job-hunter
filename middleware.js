import { withAuth } from "next-auth/middleware";

// This middleware protects routes
export default withAuth(
	function middleware(req) {
		// Add your custom logic here
	},
	{
		callbacks: {
			// Only allow access to admin routes if the user has the admin role
			authorized: ({ token }) => token?.role === "admin",
		},
	}
);

// Specify which routes should be protected
export const config = { matcher: [] };
