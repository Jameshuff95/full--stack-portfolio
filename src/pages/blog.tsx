'use client';

import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode, useState } from "react";
import { FaArrowLeft, FaCheck} from "react-icons/fa6";

// image imports
import image1 from '../../public/placeholder1.png';
import image2 from '../../public/placeholder2.png';
import image3 from '../../public/placeholder3.png';
import image4 from '../../public/placeholder1.png';
import image5 from '../../public/placeholder2.png';


interface Props {
  id?: number;
  title?: string;
  text?: string;
  href?: string;
  alt?: string;
  image?: string | StaticImport;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Page() {

  const categories:Props[] = [
    {
      id: 1,
      title: 'Category 1',
      href: '#',
    },
    {
      id: 2,
      title: 'Category 2',
      href: '#',
    },
    {
      id: 3,
      title: 'Category 3',
      href: '#',
    },
    {
      id: 4,
      title: 'Category 4',
      href: '#',
    },
    {
      id: 5,
      title: 'Category 5',
      href: '#',
    },
  ]

  const printCategories = categories.map(category => (
    <div key={category.id} className="border-b-2 border-transparent hover:scale-110 hover:border-secondary text-2xl p-2">
      <Link href={category.href || '/'}>{category.title}</Link>
    </div>
    )
  )

  const posts:Props[] = [
    {
      id: 1,
      title: 'Post 1',
      text: 'This is an example blurb.',
      href: '#',
      image: image1.src,
      alt: 'Default Alt Text',
    },
    {
      id: 2,
      title: 'Post 2',
      text: 'This is an example blurb.',
      href: '#',
      image: image2.src,
      alt: 'Default Alt Text',
    },
    {
      id: 3,
      title: 'Post 3',
      text: 'This is an example blurb.',
      href: '#',
      image: image3.src,
      alt: 'Default Alt Text',
    },
    {
      id: 4,
      title: 'Post 4',
      text: 'This is an example blurb.',
      href: '#',
      image: image4.src,
      alt: 'Default Alt Text',
    },
    {
      id: 5,
      title: 'Post 5',
      text: 'This is an example blurb.',
      href: '#',
      image: image5.src,
      alt: 'Default Alt Text',
    },
  ]

  const printPosts = posts.map(post => (
    <div className="p-2 flex gap-2 h-64" key={post.id}>
      <div className="p-2 w-1/4 rounded-md flex justify-center items-center">
        <Image width={200} height={200} src={post.image as string | StaticImport} alt={post.alt || 'error getting alt text.'} className="rounded-lg shadow-lg shadow-black" />
      </div>

      <div className="border p-2 w-3/4 rounded-md bg-primary text-secondary flex  flex-col justify-between">

        <div className="flex flex-col h-4/5 p-2 gap-2">
          <h2 className="md:text-3xl">{post.title}</h2>
          <p>{post.text}</p>
        </div>

        <div className="flex justify-end items-centerh-1/5 p-2">
          <Link href={post.href || '#'} className="rounded-lg border hover:bg-secondary hover:text-primary p-2">View Thread</Link>
        </div>

      </div>



    </div>
  ));

  const [filter, setFilter] = useState(true);

  const handleClick = () => {
    setFilter(filter => !filter);
  }

  const Filter = ({ children }:Props ) => {
    return (
      <Link href="#" onClick={handleClick} className="p-2 rounded-md flex justify-between items-center">
        {children}
      </Link>
    )
  }

  return (
    <>
      <section className="p-2 text-secondary">

        {/* Page Header */}
        <div className="bg-primary text-secondary w-full h-1/4 flex flex-col justify-evenly items-center text-center">
          <h1 className="text-4xl">From ZERO to Mastery...</h1>
          <h1 className="text-3xl">{`Learning Javascript from a True-Beginner${`&apos`}s Perspective`}</h1>
        </div>

        {/* Top Container */}
        <div className="flex flex p-2">

          {/* side menu */}
          <div className="flex flex-col justify-between gap-2 w-1/6">

            {/* Filter --Needs Work */}
            <div className="flex flex-col justify-around h-1/6 p-4 text-2xl">
                <Filter>
                  <p>Newest</p>
                  {filter === true ? <FaCheck /> : ''}
                </Filter>

                <Filter>
                  <p>Popular</p>
                  {filter === false ? <FaCheck /> : ''}
                </Filter>
            </div>
    
            <div className="w-full h-5/6 flex flex-col justify-evenly items-start p-2">
              {printCategories}
            </div>
          </div>

          <div className="w-5/6">
            {printPosts}
          </div>
        </div>
        
        <div className="bg-primary text-secondary h-80 w-full flex">

          {/* Newsletter Call to Action */}
          <div className="w-1/2 flex flex-col justify-around items-center p-2">

            <h3 className="text-2xl text-center">
              Are you learning programming? Feeling lost in the void of outdated or overly-complicated AI generated solutions? Join our weekly newsletter to get weekly coding tips to strengthen your arsenal.
            </h3>
    
            <div className="flex justify-evenly items-center h-1/2 w-1/2 border rounded-lg hover:bg-secondary hover:text-primary cursor-pointer hover:scale-95">
              <p className="text-3xl">Sign Up</p>
              <FaArrowLeft className="animate-boink text-6xl" />
            </div>

          </div>

          {/* Yet to be determined... */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center gap-2 p-2">
            <h1 className="h-1/2 w-1/2 text-center text-2xl">Content Here</h1>
            <div className="border w-3/4 h-1/2">Content Here</div>
          </div>

        </div>

      </section>
    </>
  )
}