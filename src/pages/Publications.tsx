
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PublicationCard from '@/components/PublicationCard';

const Publications = () => {
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
    },
    {
      title: "Deep Learning Approaches for Graph-Based Anomaly Detection",
      authors: "Collaborator Four, Your Name, Collaborator Five",
      venue: "IEEE Transactions on Neural Networks and Learning Systems",
      year: 2021,
      abstract: "This paper presents a comprehensive survey and analysis of deep learning approaches for anomaly detection in graph-structured data, with a focus on their applications in network security and social network analysis.",
      pdfUrl: "https://arxiv.org",
      doi: "10.1234/5680",
      bibtex: `@article{collaborator2021deep,
  title={Deep Learning Approaches for Graph-Based Anomaly Detection},
  author={Collaborator Four and Your Name and Collaborator Five},
  journal={IEEE Transactions on Neural Networks and Learning Systems},
  year={2021}
}`,
      tags: ["Deep Learning", "Anomaly Detection", "Graph Analysis", "Survey"]
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publications</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              My research papers and academic contributions
            </p>
          </div>

          <div className="space-y-8">
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
    </MainLayout>
  );
};

export default Publications;
