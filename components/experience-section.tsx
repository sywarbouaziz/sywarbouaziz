import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, CalendarIcon, ArrowRightIcon } from "lucide-react"

export default function ExperienceSection() {
const experiences = [
  {
    title: "Frontend Engineer — RedERP",
    date: "Jan 2025 – Present",
    description: [
      "Developed and maintained responsive web interfaces using React.js, ensuring performance and accessibility.",
      "Optimized frontend code for scalability and cross-browser compatibility.",
    ],
    technologies: ["React.js", "JavaScript","Git"],
  },
  {
    title: "Full-Stack Developer (Freelance)",
    date: "Jan 2025 – Present",
    description: [
      "Designed and developed company websites with NestJS, React, Docker, and Prisma, ensuring scalability and clean architecture.",
      "Built a back-office admin system for content and user management.",
      "Created an interactive chatbot using Voiceflow to enhance user support.",
      "Developed and deployed an RSS-to-Social Media automation script on VPS for multi-platform publishing.",
            "Developed static web pages using HTML, CSS, and JavaScript with cross-browser compatibility.",
                  "Converted Figma designs to responsive Next.js landing pages optimized for SEO and performance.",


    ],
    technologies: ["NestJS", "React", "Docker", "Prisma", "Voiceflow", "VPS"],
        links: [{ text: "Landing Page Demo", href: "https://landing-page-iota-blue.vercel.app/" }],

  }
];


  return (
    <section id="experience" className="container mx-auto py-16 px-4">
      <Card className="bg-portfolio-card-bg shadow-xl rounded-2xl p-8 md:p-12 border border-portfolio-border">
        <CardHeader className="pb-6 text-center">
          <CardTitle className="text-4xl md:text-5xl font-bold text-portfolio-primary-blue mb-4">
            Professional Experience 💼
          </CardTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey through various roles, contributing to impactful projects and honing my expertise.
          </p>
        </CardHeader>
        <CardContent className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 pb-8 last:pb-0 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-portfolio-accent-teal before:rounded-full animate-slide-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Improved icon positioning and styling */}
              <div className="absolute -left-4 top-0 transform -translate-y-1/2 h-8 w-8 bg-portfolio-primary-blue rounded-full flex items-center justify-center shadow-md border-2 border-white">
                <BriefcaseIcon className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-portfolio-primary-blue mb-2">{exp.title}</h3>
              <p className="flex items-center text-gray-600 mb-4 text-lg">
                <CalendarIcon className="h-5 w-5 mr-2 text-portfolio-accent-teal" />
                {exp.date}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-portfolio-text">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                  />
                ))}
              </ul>
              {exp.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {exp.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-portfolio-primary-blue hover:underline text-base font-medium"
                    >
                      {link.text} <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
              {exp.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-portfolio-accent-teal/10 text-portfolio-accent-teal px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
