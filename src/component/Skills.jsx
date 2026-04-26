const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="Skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-center text-2xl text-black font-bold">
          Skills & Technologies
        </h2>
        <p className="text-center text-lg text-[#757575] mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency
          levels.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-black">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#d8d8d8] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-black rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
