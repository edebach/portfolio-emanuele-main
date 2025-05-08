
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Get in touch for collaboration, questions, or just to say hello
            </p>
          </div>

          <ContactSection />
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
