
import React from 'react';
import PublicationCard from './PublicationCard';

const PublicationsSection = () => {
  const publications = [
    {
      title: "GNN-STF: Spatio-Temporal Forecasting with Graph Neural Networks",
      authors: "Your Name, Collaborator One, Collaborator Two",
      venue: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: 2023,
      abstract: "In this paper, we propose a novel graph neural network architecture for spatio-temporal forecasting that effectively captures both spatial dependencies and temporal dynamics in complex systems.",
      pdfUrl: "https://arxiv.org",
      doi: "10.1234/5678",
      bibtex: `@inproceedings{you2023gnn,
  title={GNN-STF: Spatio-Temporal Forecasting with Graph Neural Networks},
  author={Your Name and Collaborator One and Collaborator Two},
  booktitle={Conference on Neural Information Processing Systems},
  year={2023}
}`,
      tags: ["Graph Neural Networks", "Spatio-Temporal", "Forecasting"]
    },
    {
      title: "Edge-RL: Resource Efficient Reinforcement Learning for Edge Computing",
      authors: "Your Name, Collaborator Three",
      venue: "International Conference on Machine Learning (ICML)",
      year: 2022,
      abstract: "We introduce Edge-RL, a resource-efficient reinforcement learning framework designed specifically for deployment in edge computing environments with limited computational capabilities.",
      pdfUrl: "https://arxiv.org",
      doi: "10.1234/5679",
      bibtex: `@inproceedings{you2022edge,
  title={Edge-RL: Resource Efficient Reinforcement Learning for Edge Computing},
  author={Your Name and Collaborator Three},
  booktitle={International Conference on Machine Learning},
  year={2022}
}`,
      tags: ["Reinforcement Learning", "Edge Computing", "Resource Efficiency"]
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Research papers and academic contributions
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => (
              <PublicationCard
                key={index}
                title={pub.title}
                authors={pub.authors}
                venue={pub.venue}
                year={pub.year}
                abstract={pub.abstract}
                pdfUrl={pub.pdfUrl}
                doi={pub.doi}
                bibtex={pub.bibtex}
                tags={pub.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
