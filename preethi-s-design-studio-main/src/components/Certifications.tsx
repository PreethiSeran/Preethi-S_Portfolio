import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { name: "Google UX Design Certificate", provider: "Coursera" },
    { name: "Getting Started with Python", provider: "Coursera" },
    { name: "Data, Data Everywhere", provider: "Coursera" },
    { name: "Natural Language Processing (NLP)", provider: "Infosys Springboard" },
    { name: "Digital Communication", provider: "Infosys Springboard" },
    { name: "Artificial Intelligence & Machine Learning", provider: "Infosys Springboard" },
    { name: "Cloud Computing & AWS", provider: "Infosys Springboard" },
  ];

  return (
    <section id="certifications" className="section-container">
      <div className="animate-fade-in">
        <h2 className="section-title text-center">Certifications</h2>
        <p className="section-subtitle text-center">
          Professional certifications and continuous learning
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-card-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {cert.name}
                  </h3>
                </div>
                <Badge variant="secondary" className="bg-accent">
                  {cert.provider}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
