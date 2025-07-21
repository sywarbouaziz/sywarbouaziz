"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg py-4 px-6 md:px-8 border-b border-portfolio-border">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="text-2xl font-extrabold text-portfolio-primary-blue tracking-wide">
          Siwar Bouaziz
        </Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-portfolio-text hover:text-portfolio-primary-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-primary-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-7 w-7 text-portfolio-primary-blue" />
            ) : (
              <MenuIcon className="h-7 w-7 text-portfolio-primary-blue" />
            )}
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-4 pb-4 bg-white border-t border-portfolio-border">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-portfolio-text hover:text-portfolio-primary-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
