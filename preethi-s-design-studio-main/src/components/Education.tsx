import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "C.K. College of Engineering and Technology",
      degree: "B.Tech – Artificial Intelligence and Data Science",
      duration: "2022 – 2026",
      grade: "CGPA: 83%",
    },
    {
      institution: "St. Anne's Girls Hr Sec School",
      degree: "Higher Secondary (12th)",
      duration: "2021 – 2022",
      grade: "77.17%",
    },
    {
      institution: "St. Anne's Girls Hr Sec School",
      degree: "Secondary School (10th)",
      duration: "2019 – 2020",
      grade: "88.8%",
    },
  ];

  return (
    <section id="education" className="section-container bg-section-bg">
      <div className="animate-fade-in">
        <h2 className="section-title text-center">Education</h2>
        <p className="section-subtitle text-center">My academic journey</p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6 sm:p-8 flex gap-4 sm:gap-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 h-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="font-medium text-foreground">{edu.grade}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
