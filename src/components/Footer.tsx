
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary py-10 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text">Emanuele Elie Debach</h3>
            <p className="mt-1 text-muted-foreground">
              Software Engineer with Machine Learning & AI focus
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/edebach" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/emanuele-elie-debach-89120b162/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:emanuele.debach@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {/*<p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>*/}
          <p className="mt-1">Built with React, Tailwind CSS, and ShadCN UI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
