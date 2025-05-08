
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background z-0"></div>
      
      {/* Grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,120,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
              <span className="gradient-text">Software Engineer</span> with
              <br />Machine Learning & AI focus
            </h1>
            
            <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground mx-auto">
              Master's student passionate about machine learning, graph neural networks,
              and developing intelligent systems.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild className="rounded-full">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="/documents/emanuele_elie_debach_cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/edebach"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/emanuele-elie-debach-89120b162/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
