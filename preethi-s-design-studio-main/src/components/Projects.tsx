import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Eco Habit AI Tracker",
      subtitle: "Personalized Sustainability Habit Tracker",
      description:
        "Designed & developed a responsive web app for users to track eco-friendly habits. Integrated AI-powered habit suggestions. Created wireframes, prototypes, and final UI; deployed as a live version.",
      tools: ["Figma", "React.js", "JavaScript", "CSS", "Vercel"],
      link: "https://ecohabit-ai-tracker-zeta.vercel.app",
    },
    {
      title: "BookVibe",
      subtitle: "Mood-Based Book Recommendation Website",
      description:
        "Designed a mood-based book recommendation experience. Focused on color psychology, user emotions, and engagement. Published a detailed case study on Behance.",
      tools: ["Figma", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/PreethiSeran/Book_vibe_online_book_store",
    },
    {
      title: "Coffee Brew",
      subtitle: "Online Coffee Shop Website",
      description:
        "Designed a clean, modern coffee-shop landing page. Converted UI into a responsive React interface. Ensured smooth transitions, accessibility, and consistency.",
      tools: ["Figma", "React.js", "HTML", "CSS"],
      link: "https://hello-coffee.vercel.app/",
    },
    {
      title: "Breeze Quest",
      subtitle: "Tourism Guide Website",
      description:
        "Created a tourism guide website showing destinations & testimonials. Applied visual hierarchy, usability testing, and responsive design.",
      tools: ["Figma", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/PreethiSeran/website-design-tourism-guide-agency",
    },
  ];

  return (
    <section id="projects" className="section-container bg-section-bg">
      <div className="animate-fade-in">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center">Explore my latest work and case studies</p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border/50 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-primary/30 overflow-hidden group"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base font-medium">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to hover:opacity-90 transition-opacity"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
