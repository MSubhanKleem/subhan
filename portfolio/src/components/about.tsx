import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated computer science student with a passion for learning and creating.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              As a 10th-grade student, I've discovered my passion for computer science and programming. I enjoy solving
              complex problems, learning new technologies, and building projects that make a difference. My goal is to
              become a skilled software developer and contribute to innovative solutions in the tech industry.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new programming languages, participating in coding
              competitions, or working on personal projects that challenge my skills.
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold">Education</h4>
                </div>
                <p className="text-muted-foreground">
                  Currently in 10th Grade, focusing on Computer Science and Mathematics
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-purple-600 mr-3" />
                  <h4 className="text-xl font-semibold">Interests</h4>
                </div>
                <p className="text-muted-foreground">
                  Web Development, Mobile Apps, AI/ML, and Competitive Programming
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold">Goals</h4>
                </div>
                <p className="text-muted-foreground">
                  Become a full-stack developer and contribute to open-source projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
