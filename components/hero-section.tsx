import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-portfolio-primary-blue to-blue-800 text-white py-28 md:py-40 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        {/* More abstract and subtle background pattern */}
        <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-hexagons" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0L0 11.547V34.641L20 46.188L40 34.641V11.547L20 0Z" fill="rgba(255,255,255,0.1)" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-hexagons)" />
        </svg>
      </div>
      <div className="container mx-auto relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Hi there, I'm <span className="text-yellow-300">Siwar Bouaziz</span> 👋
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 opacity-90 animate-fade-in-up delay-200">
          I’m a Software Engineer with a full-stack background, passionate about building scalable applications, enhancing user experience, and collaborating with teams to deliver high-quality solutions.
        </p>

        <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
          <Button
            asChild
            className="bg-white text-portfolio-primary-blue hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link href="#projects">
              View My Work <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-portfolio-primary-blue px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
