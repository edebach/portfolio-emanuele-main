
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';
import ProjectsSection from '@/components/ProjectsSection';
import PublicationsSection from '@/components/PublicationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      {/*<PublicationsSection />*/}
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
