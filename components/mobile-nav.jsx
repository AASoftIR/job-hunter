"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Job Hunter</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          <Link href="/jobs" onClick={() => setOpen(false)}>
            Find Jobs
          </Link>
          <Link href="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link href="/login" onClick={() => setOpen(false)}>
            Login / Sign Up
          </Link>
          <ModeToggle />
        </nav>
      </SheetContent>
    </Sheet>
  )
}

