'use client';

import Card from "./card";
import Image from "next/image";

import placeholder1 from '@/public/placeholder1.png';
import placeholder2 from '@/public/placeholder2.png';
import placeholder3 from '@/public/placeholder3.png';

export default function Featured() {

  type FeaturedProject = {
    id: number,
    title: string;
    image: string;
    alt: string;
    description: string;
  }
  
  const featuredProjects: FeaturedProject[] = [
    {
      id: 1,
      title: 'Project Title',
      image: placeholder1.src,
      alt: 'alt text',
      description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
    },
    {
      id: 2,
      title: 'Project Title',
      image: placeholder2.src,
      alt: 'alt text',
      description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
    },
    {
      id: 3,
      title: 'Project Title',
      image: placeholder3.src,
      alt: 'alt text',
      description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
    },
    {
      id: 4,
      title: 'Project Title',
      image: placeholder1.src,
      alt: 'alt text',
      description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
    },
    {
      id: 5,
      title: 'Project Title',
      image: placeholder2.src,
      alt: 'alt text',
      description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
    },
    {
      id: 6,
      title: 'Project Title',
      image: placeholder3.src,
      alt: 'alt text',
      description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
    },
  ];
  
  return (
    <section className="bg-white text-black flex flex-col gap-2 p-2">
      <h2 className="p-4 text-center text-4xl md:text-5xl ">
        Featured Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {
        featuredProjects.map((featuredProject) => ( 
          <Card 
            key={featuredProject.id} 
            className="flex flex-col w-4/5 max-w-96 m-auto items-center p-4 md:w-full m-none border border-black">
              <Image 
                src={featuredProject.image} 
                alt={featuredProject.alt} 
                width={0} 
                height={0} 
                className="w-4/5 h-48 rounded-md border border-black"
              />

              <div className="w-full flex flex-col gap-2 p-2">
                <p className="border border-black w-full h-full p-2 rounded-md text-xl">
                  {featuredProject.description}
                </p>
                <button className="border border-black bg-gray-400 text-black h-14 w-full rounded-md cursor-pointer h-1/4">
                  Learn More 
                </button>
              </div>
          </Card>
        )
      )}
      </div>
      
    </section>
  )
}