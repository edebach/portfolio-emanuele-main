
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Graph Neural Network for Traffic Prediction",
      description: "Developed a spatio-temporal GNN model for traffic flow prediction in urban environments, achieving 15% improvement over baseline models.",
      tags: ["PyTorch", "GNN", "Spatio-temporal", "Traffic Analysis"],
      githubUrl: "https://github.com",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Reinforcement Learning for Resource Allocation",
      description: "Implemented a deep RL approach to optimize computational resource allocation in edge computing environments.",
      tags: ["Reinforcement Learning", "Edge Computing", "TensorFlow"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Computer Vision for Medical Imaging",
      description: "Created a CNN-based system for automated detection of anomalies in medical imaging data, focused on early disease detection.",
      tags: ["Computer Vision", "CNN", "Healthcare", "PyTorch"],
      githubUrl: "https://github.com",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "NLP System for Research Paper Analysis",
      description: "Built a natural language processing system to analyze and categorize research papers based on their methodology and findings.",
      tags: ["NLP", "Transformers", "BERT", "Python"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              A collection of research projects and applications I've built
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                imageSrc={project.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
