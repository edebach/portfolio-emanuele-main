
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
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
    },
    {
      title: "Deep Learning for Weather Prediction",
      description: "Designed and implemented a deep learning model for accurate weather forecasting using historical meteorological data.",
      tags: ["Deep Learning", "Time Series", "PyTorch", "Meteorology"],
      githubUrl: "https://github.com",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Federated Learning System",
      description: "Created a federated learning system for privacy-preserving model training across multiple distributed data sources.",
      tags: ["Federated Learning", "Privacy", "Distributed Systems"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  // Create categories of projects
  const categories = [
    { name: "All", filter: () => true },
    { name: "Graph Neural Networks", filter: (project: any) => project.tags.includes("GNN") },
    { name: "Reinforcement Learning", filter: (project: any) => project.tags.includes("Reinforcement Learning") },
    { name: "Computer Vision", filter: (project: any) => project.tags.includes("Computer Vision") || project.tags.includes("CNN") }
  ];

  const [activeCategory, setActiveCategory] = React.useState("All");
  const filteredProjects = projects.filter(
    categories.find(cat => cat.name === activeCategory)?.filter || (() => true)
  );

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Explore my research projects and technical applications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                onClick={() => setActiveCategory(category.name)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
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
    </MainLayout>
  );
};

export default Projects;
