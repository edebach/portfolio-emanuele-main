
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Book, Code, Star } from 'lucide-react';

const AboutMeSection = () => {
  const skills = [
    "Python", "PyTorch", "TensorFlow", 
    "Graph Neural Networks", "Reinforcement Learning", 
    "Computer Vision", "Edge Computing", "C/C++", "React"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Graduate student specializing in machine learning and computer engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Background</h3>
              <p className="text-muted-foreground">
                I'm a passionate Master's student  at Imperial College
                with experience as a software engineering,
                currently pursuing graduate studies in Computing specialising in AI and Machine Learning. My
                current research project
                focuses on graph neural networks and their applications in complex 
                systems, particularly in spatio-temporal modeling.
              </p>
              <p className="text-muted-foreground">
                Throughout my academic journey, I've collaborated on various projects 
                involving deep learning, reinforcement learning, and edge computing. 
                I'm particularly interested in developing efficient algorithms for 
                real-world applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Briefcase className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-xl font-semibold">Experience</h4>
                  <p className="text-center text-muted-foreground">
                    Software Engineer at NTT Data
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Book className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-xl font-semibold">Education</h4>
                  <p className="text-center text-muted-foreground">
                    MSc in Computing (AI and ML)
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Code className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-xl font-semibold">Development</h4>
                  <p className="text-center text-muted-foreground">
                    Full-stack & ML
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Star className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-xl font-semibold">Research</h4>
                  <p className="text-center text-muted-foreground">
                    Graph Neural Networks
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
