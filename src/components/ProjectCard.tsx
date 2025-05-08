
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  imageSrc,
}: ProjectCardProps) => {
  return (
    <Card className="project-card h-full flex flex-col">
      {imageSrc && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow pb-2">
        <p className="text-muted-foreground">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2 gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        
        {demoUrl && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <LinkIcon className="h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
