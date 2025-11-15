import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-container bg-section-bg">
      <div className="animate-fade-in">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">Get to know me better</p>

        <Card className="max-w-4xl mx-auto border-border/50 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-8 sm:p-12">
            <p className="text-lg text-foreground leading-relaxed">
              I am a final-year <span className="font-semibold text-primary">B.Tech student in Artificial Intelligence and Data Science</span>, passionate about creating meaningful and user-centered digital experiences. 
            </p>
            <p className="text-lg text-foreground leading-relaxed mt-4">
              Skilled in <span className="font-semibold">UI/UX design, prototyping, and front-end development</span> with a strong foundation in Java, Python, SQL, and AI/ML. 
            </p>
            <p className="text-lg text-foreground leading-relaxed mt-4">
              I focus on designing <span className="font-semibold text-primary">engaging, user-friendly interfaces</span> and continuously learning modern design trends.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
