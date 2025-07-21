import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="bg-portfolio-dark-blue text-white py-8 mt-16 shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="https://github.com/sywarbouaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-portfolio-accent-teal transition-colors"
          >
            <GithubIcon className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/siwar-bouaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-portfolio-accent-teal transition-colors"
          >
            <LinkedinIcon className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-portfolio-accent-teal transition-colors">
            <MailIcon className="h-8 w-8" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <p className="text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Siwar Bouaziz. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Designed and Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui.
        </p>
      </div>
    </footer>
  )
}
