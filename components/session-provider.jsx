"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

// This component wraps the entire app to provide session context
export function SessionProvider({ children }) {
	return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
