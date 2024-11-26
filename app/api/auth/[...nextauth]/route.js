import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // You should return either:
        // 1. A user object (if authentication was successful)
        // 2. null (if authentication failed)

        // This is a mock implementation. Replace with actual database lookup.
        if (credentials?.email === "admin@example.com" && credentials?.password === "password") {
          return { id: "1", name: "Admin", email: "admin@example.com", role: "admin" }
        } else if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return { id: "2", name: "User", email: "user@example.com", role: "user" }
        }
        return null
      }
    })
  ],
  callbacks: {
    // Callback to add role to the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    // Callback to add role to the session
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role
      }
      return session
    }
  },
  pages: {
    // Custom sign in page
    signIn: '/login',
  },
})

export { handler as GET, handler as POST }

