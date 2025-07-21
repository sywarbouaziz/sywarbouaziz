import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LaptopIcon, ServerIcon, Code2Icon, CloudIcon, DatabaseIcon, PenToolIcon as ToolIcon } from "lucide-react"

export default function SkillsSection() {
  const skillsCategories = [
    {
      title: "Frontend Development",
      icons: "vue,react,nextjs,html,css,js,ts",
      alt: "Frontend skills",
      iconComponent: <LaptopIcon className="h-8 w-8 text-portfolio-primary-blue" />,
    },
    {
      title: "Backend Development",
      icons: "nestjs,nodejs,express,python",
      alt: "Backend skills",
      iconComponent: <ServerIcon className="h-8 w-8 text-portfolio-primary-blue" />,
    },
    {
      title: "Programming Languages",
      icons: "py,java,js,ts,c,cpp",
      alt: "Languages",
      iconComponent: <Code2Icon className="h-8 w-8 text-portfolio-primary-blue" />,
    },
   {
  title: "DevOps & CI/CD",
  icons: "docker,jenkins,githubactions",
  alt: "DevOps and CI/CD",
  iconComponent: <CloudIcon className="h-8 w-8 text-portfolio-primary-blue" />,
},

    {
      title: "Databases",
      icons: "mongodb,postgresql,mysql,supabase",
      alt: "Databases",
      iconComponent: <DatabaseIcon className="h-8 w-8 text-portfolio-primary-blue" />,
    },
    {
      title: "Tools & Others",
      icons: "git,github,figma,vscode,postman",
      alt: "Tools and Others",
      iconComponent: <ToolIcon className="h-8 w-8 text-portfolio-primary-blue" />,
    },
  ]

  return (
    <section id="skills" className="container mx-auto py-16 px-4">
      <Card className="bg-portfolio-card-bg shadow-xl rounded-2xl p-8 md:p-12 border border-portfolio-border">
        <CardHeader className="pb-6 text-center">
          <CardTitle className="text-4xl md:text-5xl font-bold text-portfolio-primary-blue mb-4">
            My Tech Arsenal 🛠️
          </CardTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive look at the technologies and tools I wield to build robust and scalable solutions.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-portfolio-light-blue rounded-lg shadow-sm border border-portfolio-border text-center hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{category.iconComponent}</div>
                <h3 className="text-xl font-semibold text-portfolio-primary-blue mb-4">{category.title}</h3>
                <img
                  src={`https://skillicons.dev/icons?i=${category.icons}&theme=light`}
                  alt={category.alt}
                  className="max-w-[90%] h-auto object-contain"
                  width={250}
                  height={80}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
