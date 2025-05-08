
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Copy, Link as LinkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

interface PublicationCardProps {
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract: string;
  pdfUrl?: string;
  doi?: string;
  bibtex?: string;
  tags?: string[];
}

const PublicationCard = ({
  title,
  authors,
  venue,
  year,
  abstract,
  pdfUrl,
  doi,
  bibtex,
  tags = [],
}: PublicationCardProps) => {
  const { toast } = useToast();

  const copyBibtex = () => {
    if (bibtex) {
      navigator.clipboard.writeText(bibtex);
      toast({
        title: "BibTeX copied",
        description: "Citation has been copied to clipboard",
      });
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <div className="text-sm text-muted-foreground mt-1">{authors}</div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-medium">{venue}</span>
          <span className="text-sm">({year})</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{abstract}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-2">
        {pdfUrl && (
          <Button variant="outline" size="sm" asChild>
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <FileText className="h-4 w-4" />
              PDF
            </a>
          </Button>
        )}
        
        {doi && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <LinkIcon className="h-4 w-4" />
              DOI
            </a>
          </Button>
        )}
        
        {bibtex && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={copyBibtex}
            className="inline-flex items-center gap-1"
          >
            <Copy className="h-4 w-4" />
            BibTeX
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PublicationCard;
