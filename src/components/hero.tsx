'use client';

import HeroImage from '@/public/me_anime.png';
import Image from 'next/image';


const Hero = () => {



  return (
    <article className={`h-screen w-full flex flex-col text-center text-text`}>
      <div className="flex flex-col gap-2 md:w-full items-center justify-center md:flex-row h-full">

        <div className="md:h-auto w-full md:w-1/2 flex justify-center items-center">
          <Image 
            src={HeroImage} 
            alt="A picture of James Huff" 
            className="w-1/2 h-full md:w-1/2 md:h-2/3 rounded-full" 
          />
        </div>

        <div className="flex flex-col items-center justify-evenly min-h-96 w-full md:w-1/2 m-2">

          <h1 className="w-full flex items-center text-center p-2 text-3xl md:text-5xl lg:text-6xl h-2/5">
            Shaping the future through relentless innovation and strategic vision.
          </h1>

          <p className="text-center text-md md:text-xl text-2xl">
            I am a web developer who discovered his passion for programming late into his twenties. I have experimented with high-end languages such as Python and lower-end languages like C++. I have found my niche in Next.js.
          </p>

        </div>

      </div>
    </article>
  );
}

export default Hero;


/*

// import Link from 'next/link';
// import { ReactNode } from 'react';
// import { FaDownload } from 'react-icons/fa6';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

// button component
const Button = ({ children }: ButtonProps) => {
  return (
    <Link href="#" className="w-1/3 p-2 flex flex-col align-center justify-center text-2xl hover:scale-95 active:scale-90 rounded-lg  hover:bg-secondary hover:text-primary hover:shadow-2xl inset-shadow-blue-800 duration-100 ease-in-out">
      {children}
    </Link>
  )
}
  
<div className="flex justify-around gap-4 w-full">
  <Button>
    <span className="flex align-center justify-center gap-2">
      <p>Resume</p>
      <FaDownload />
    </span>
  </Button>

  <Button className="hover:border-2 hover:border-secondary">
    <p>Contact</p>
  </Button>
</div>

*/