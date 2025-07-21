import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LightbulbIcon, UsersIcon, CodeIcon } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-16 px-4">
      <Card className="bg-portfolio-card-bg shadow-xl rounded-2xl p-8 md:p-12 border border-portfolio-border">
        <CardHeader className="pb-6 text-center">
          <CardTitle className="text-4xl md:text-5xl font-bold text-portfolio-primary-blue mb-4">About Me ✨</CardTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A brief overview of my passion for technology, problem-solving, and sharing knowledge.
          </p>
        </CardHeader>
<CardContent className="space-y-10 text-lg text-portfolio-text leading-relaxed">
  <div className="flex flex-col md:flex-row items-start md:space-x-6 animate-fade-in-up">
    <CodeIcon className="h-10 w-10 text-portfolio-accent-teal flex-shrink-0 mb-4 md:mb-0" />
    <div>
      <h3 className="text-2xl font-semibold text-portfolio-primary-blue mb-2">Technical Focus</h3>
      <p>
        I focus on designing and building scalable, maintainable applications with clean architecture. My goal is to deliver solutions that are robust, performant, and easy to evolve over time.
      </p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row items-start md:space-x-6 animate-fade-in-up delay-100">
    <UsersIcon className="h-10 w-10 text-portfolio-accent-teal flex-shrink-0 mb-4 md:mb-0" />
    <div>
      <h3 className="text-2xl font-semibold text-portfolio-primary-blue mb-2">Collaboration & Quality</h3>
      <p>
        I value collaboration, constructive feedback, and a team-driven approach to problem-solving. Producing high-quality, reliable software is a priority in every project I contribute to.
      </p>
    </div>
  </div>
  <div className="flex flex-col md:flex-row items-start md:space-x-6 animate-fade-in-up delay-200">
    <LightbulbIcon className="h-10 w-10 text-portfolio-accent-teal flex-shrink-0 mb-4 md:mb-0" />
    <div>
      <h3 className="text-2xl font-semibold text-portfolio-primary-blue mb-2">Growth Mindset</h3>
      <p>
        I continuously seek to improve my skills, explore new technologies, and adapt to changing needs. I believe that staying curious and open to learning is essential to delivering better solutions and growing as an engineer.
      </p>
    </div>
  </div>
</CardContent>


      </Card>
    </section>
  )
}
