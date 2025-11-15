import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    "Selected as Contributor for GirlScript Summer of Code 2025",
    "Showcased creative UI/UX projects on Dribbble",
    "Published a complete UI/UX case study on Behance",
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="animate-fade-in">
        <h2 className="section-title text-center">Achievements</h2>
        <p className="section-subtitle text-center">Milestones and recognitions</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-card-hover"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{achievement}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
