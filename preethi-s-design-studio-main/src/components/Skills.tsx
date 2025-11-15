import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    "Figma",
    "Canva",
    "Adobe XD",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Python",
    "Java",
    "C",
    "SQL",
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Time Management",
    "Problem Solving",
    "Analytical Thinking",
    "Design Thinking",
  ];

  return (
    <section id="skills" className="section-container">
      <div className="animate-fade-in">
        <h2 className="section-title text-center">Skills</h2>
        <p className="section-subtitle text-center">My technical and soft skills</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
