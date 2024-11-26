import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Find Your Dream Job</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Discover thousands of job opportunities with the world's leading companies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/jobs">Search Jobs</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

