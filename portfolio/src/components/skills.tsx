import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skills = [
    { name: "HTML/CSS", level: 85, color: "bg-orange-500" },
    { name: "JavaScript", level: 75, color: "bg-yellow-500" },
    { name: "React", level: 70, color: "bg-blue-500" },
    { name: "Next.js", level: 65, color: "bg-gray-800" },
    { name: "Python", level: 80, color: "bg-green-500" },
    { name: "Java", level: 60, color: "bg-red-500" },
    { name: "Git/GitHub", level: 70, color: "bg-purple-500" },
    { name: "Problem Solving", level: 85, color: "bg-pink-500" },
  ]

  const categories = [
    {
      title: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
      icon: "🎨",
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++"],
      icon: "💻",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "VS Code", "Node.js", "MongoDB"],
      icon: "🛠️",
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Work", "Communication", "Time Management"],
      icon: "🧠",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and skills I've been learning and working with.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
