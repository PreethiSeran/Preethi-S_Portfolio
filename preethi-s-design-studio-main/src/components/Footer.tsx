import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a
              href="mailto:preethi969875@gmail.com"
              className="p-3 rounded-full bg-background hover:bg-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="tel:+917010697569"
              className="p-3 rounded-full bg-background hover:bg-accent transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://github.com/PreethiSeran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/preethi-seran-1266332a4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a
              href="https://share.google/jDDdVyoLYbQ72F715"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-accent transition-colors"
              aria-label="Behance"
            >
              <svg className="h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Preethi S. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Designed & Built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
