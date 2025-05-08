
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import AboutMeSection from '@/components/AboutMeSection';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Learn more about my background, skills, and experience
            </p>
          </div>

          <AboutMeSection />

          <div className="mt-12 flex justify-center">
            <Button asChild className="rounded-full">
              <a href="/documents/emanuele_elie_debach_cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
