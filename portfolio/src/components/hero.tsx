"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            S
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Subhan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">Computer Science Student</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about coding, problem-solving, and building innovative solutions. Currently in 10th grade,
            exploring the world of technology and programming.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button onClick={() => scrollToSection("projects")} size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
