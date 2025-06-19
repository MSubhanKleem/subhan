import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "#",
      demo: "#",
      status: "Completed",
    },
    {
      title: "Todo List App",
      description:
        "A simple yet functional todo list application with local storage support and drag-and-drop functionality.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      github: "#",
      demo: "#",
      status: "Completed",
    },
    {
      title: "Calculator App",
      description:
        "A scientific calculator built with vanilla JavaScript featuring basic and advanced mathematical operations.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
      status: "Completed",
    },
    {
      title: "Weather App",
      description:
        "A weather application that fetches real-time weather data using OpenWeatherMap API with location-based search.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "API Integration", "CSS"],
      github: "#",
      demo: "#",
      status: "In Progress",
    },
    {
      title: "Quiz Game",
      description: "An interactive quiz game with multiple categories, timer functionality, and score tracking system.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["JavaScript", "HTML", "CSS", "JSON"],
      github: "#",
      demo: "#",
      status: "Completed",
    },
    {
      title: "School Management System",
      description:
        "A comprehensive school management system for tracking students, grades, and attendance (Learning Project).",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Tkinter", "SQLite"],
      github: "#",
      demo: "#",
      status: "In Progress",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge
                  className={`absolute top-2 right-2 ${
                    project.status === "Completed" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
