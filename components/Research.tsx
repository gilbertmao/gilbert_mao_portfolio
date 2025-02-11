import React from 'react';
import { Button } from './ui/MovingBorders';
import { FaDownload, FaEye } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const researchItems = [
  {
    id: 1,
    title: "Unsupervised machine learning reveals slab hydration variations from deep earthquake distributions beneath the northwest Pacific",
    description: "Unsupervising Clustering Applications in Seismology",
    thumbnail: "/research_paper_thumbnail.svg",
    pdfUrl: "/documents/glmao_research_paper.pdf"
  },
  {
    id: 2,
    title: "EGU 2022 Conference Preprint",
    description: "Presented in Nov 2022",
    thumbnail: "/research_poster_thumbnail.svg",
    pdfUrl: "/documents/glmao_research_poster.pdf"
  }
];

const Research = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  return (
    <div className='py-20' id="research">
      <h1 className="heading">
        My <span className="text-accent">Research</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {researchItems.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800 md:col-span-2'
          >
            <div className='flex flex-col p-6 gap-4 w-full'>
              <div className='flex-1'>
                <h2 className='text-xl font-bold mb-2 line-clamp-2'>{item.title}</h2>
                <p className='text-white-100 mb-4'>{item.description}</p>
                
                <div className='bg-black-200 rounded-lg p-4 mb-4 h-[300px] flex items-center justify-center'>
                  <img 
                    src={item.thumbnail} 
                    alt={`${item.title} preview`}
                    className='w-full h-full object-contain rounded shadow-lg'
                  />
                </div>
                
                <div className='flex gap-4 justify-center'>
                  <a 
                    href={`${baseUrl}${item.pdfUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-400/10 hover:bg-teal-400/20 transition-colors'
                  >
                    <FaEye />
                    <span>View</span>
                  </a>
                  <a 
                    href={`${baseUrl}${item.pdfUrl}`}
                    download
                    className='flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-400/10 hover:bg-teal-400/20 transition-colors'
                  >
                    <FaDownload />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Research;