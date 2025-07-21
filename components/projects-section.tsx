import ProjectCard from "@/components/project-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Backoffice Admin System",
      iframeSrc: "https://drive.google.com/file/d/1MQURPzH5cagOyYFpK-WQ4pbrfRecLvm9/preview",
      description:
        "Developed a comprehensive back-office admin system to manage website content, user data, and job listings for a client, ensuring seamless operations and scalability.",
      features: [
        "Dashboard for managing website content and user interactions.",
        "Secure handling of job listings and user data.",
        "Optimized for performance and ease of use.",
      ],
      technologies: ["NestJS", "Prisma", "React", "MongoDB"],
    },
    {
      title: "Static Web Pages",
      iframeSrc: "https://drive.google.com/file/d/1bMp27z4oXdv_MngeaiyRr73CFI7n_PaI/preview",
      description:
        "Developed three responsive static web pages using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and performance optimization.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Intelligent Chatbot 🤖",
      iframeSrc: "https://drive.google.com/file/d/18dKauWZ-i5PDabyHMsTO9yd44e-rYRXl/preview",
      description:
        "Developed in just two days using Voiceflow, this intelligent chatbot facilitates user interactions by:",
      features: [
        "Providing real-time responses to user inquiries.",
        "Guiding users through structured form submissions and recommending job opportunities based on their input.",
        "Securely storing user information, including experience, skills, email, and job title, for future opportunities.",
        "Incorporating interactive elements such as buttons, triggers, and API calls to enhance user engagement.",
      ],
      technologies: ["Voiceflow"],
    },
    {
      title: "Company Website (Front Office)",
      iframeSrc: "https://drive.google.com/file/d/1HtoYFXTDdSaMHbLBu9gP-vKW9FmTewP6/preview",
      description:
        "This project is a company website designed to showcase the organization's services, job offers, and other key information. It serves as a central hub for potential clients and job seekers to learn more about the company and its offerings.",
      technologies: ["NestJS", "Prisma", "ReactJS", "MongoDB"],
    },
    {
      title: "E-learning Platform",
      vimeoId: "1041697032",
      vimeoChapters: [
        { name: "Admin Interface", time: 0 },
        { name: "Trainer Interface", time: 103 },
        { name: "User Interface", time: 127 },
      ],
      description:
        "This is a comprehensive platform designed to facilitate employee learning and development. It allows users to engage with a variety of courses, track their progress, and receive personalized recommendations based on their learning history and preferences.",
      features: [
        "Course Management: Admins can validate courses and modules, ensuring that content is appropriate and up-to-date before being made available to users.",
        "Progress Tracking: Users can mark chapters as completed, enabling both users and admins to track their learning progress.",
        "Personalized Recommendations: The system provides course suggestions tailored to each user based on their interactions and progress within the platform.",
        "Modular Learning: Each course is divided into modules and chapters, allowing users to learn at their own pace while providing flexibility for admins to validate content on a chapter-by-chapter or module-by-module basis.",
      ],
      technologies: ["NestJS", "Prisma", "Vue.js", "Supabase", "Docker", "Jenkins"],
    },
    {
      title: "Service Sharing Application",
      iframeSrc: "https://drive.google.com/file/d/125MIJO-OwOmU0aoWqTwC-XUX-f9UrNAL/preview",
      description:
        "This project is a Service Sharing Application that allows users to share and access services in real-time. Users can post service requests, offer services, and interact with others based on their location. It enhances communication and collaboration within communities.",
      features: [
        "Real-Time Service Sharing: Users can post and view service requests or offers in real-time.",
        "Location-Based Interaction: Services are displayed on an interactive map, allowing users to find and interact with nearby posts.",
        "User Profiles: Users can create profiles to showcase their skills, services, and ratings.",
        "Live Updates: Real-time notifications keep users informed about new posts, messages and updates.",
      ],
      technologies: ["NestJS", "Prisma", "Vue.js", "Supabase", "PostgreSQL", "Docker"],
    },
  ]

  return (
    <section id="projects" className="container mx-auto py-16 px-4">
      <Card className="bg-portfolio-card-bg shadow-xl rounded-2xl p-8 md:p-12 border border-portfolio-border">
        <CardHeader className="pb-6 text-center">
          <CardTitle className="text-4xl md:text-5xl font-bold text-portfolio-primary-blue mb-4">
            Highlighted Projects 🎉 🎉
          </CardTitle>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of my most impactful projects, showcasing my technical skills and problem-solving abilities.
          </p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
