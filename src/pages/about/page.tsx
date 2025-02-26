
'use client';

import { useState } from "react";
import { FaPlus, FaArrowLeft, FaDownload } from "react-icons/fa6";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// image imports
import image1 from '@/public/placeholder1.png';
import image2 from '@/public/placeholder2.png';
import image3 from '@/public/placeholder3.png';
import image4 from '@/public/placeholder1.png';
import image5 from '@/public/placeholder2.png';

interface Details {
  id: number,
  title: string;
  blurb?: string;
  img?: StaticImageData;
  alt?: string;
  link?: string;
  github?: string;
}

export default function Page() {

  const techSkills: Details[] = [
    {
      id: 1,
      title: 'Skill 1',
      blurb: 'This is an example blurb.',
    },
    {
      id: 2,
      title: 'Skill 2',
      blurb: 'This is an example blurb.',
    },
    {
      id: 3,
      title: 'Skill 3',
      blurb: 'This is an example blurb.',
    },
    {
      id: 4,
      title: 'Skill 4',
      blurb: 'This is an example blurb.',
    },
    {
      id: 5,
      title: 'Skill 5',
      blurb: 'This is an example blurb.',
    },

  ];

  const softSkills: Details[] = [
    {
      id: 1,
      title: 'Soft Skill 1',
      blurb: 'This is an example blurb.',
    },
    {
      id: 2,
      title: 'Soft Skill 2',
      blurb: 'This is an example blurb.',
    },
    {
      id: 3,
      title: 'Soft Skill 3',
      blurb: 'This is an example blurb.',
    },
    {
      id: 4,
      title: 'Soft Skill 4',
      blurb: 'This is an example blurb.',
    },
    {
      id: 5,
      title: 'Soft Skill 5',
      blurb: 'This is an example blurb.',
    },
  ]

  const interests: Details[] = [
    {
      id: 1,
      title: 'Interest 1',
      blurb: 'This is an example blurb.',
    },
    {
      id: 2,
      title: 'Interest 2',
      blurb: 'This is an example blurb.',
    },
    {
      id: 3,
      title: 'Interest 3',
      blurb: 'This is an example blurb.',
    },
    {
      id: 4,
      title: 'Interest 4',
      blurb: 'This is an example blurb.',
    },
    {
      id: 5,
      title: 'Interest 5',
      blurb: 'This is an example blurb.',
    },

  ];

  const projects: Details[] = [
    {
      id: 1,
      title: 'Project 1',
      blurb: 'This is an example blurb.',
      img: image1,
      alt: 'project image alt 1',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      blurb: 'This is an example blurb.',
      img: image2,
      alt: 'project image alt 2',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Project 3',
      blurb: 'This is an example blurb.',
      img: image3,
      alt: 'project image alt 3',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Project 4',
      blurb: 'This is an example blurb.',
      img: image4,
      alt: 'project image alt 4',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Project 5',
      blurb: 'This is an example blurb.',
      img: image5,
      alt: 'project image alt 5',
      link: '#',
      github: '#',
    },
  ]

  const [showInterests, setShowInterests] = useState(false);
  const [showTechSkills, setShowTechSkills] = useState(false);
  const [showSoftSkills, setShowSoftSkills] = useState(false);

  // set show interests
  const show1 = () => {
    setShowInterests(showInterests => !showInterests);
  }

  // set show interests
  const show2 = () => {
    setShowSoftSkills(showSoftSkills => !showSoftSkills);
  }

  // set show interests
  const show3 = () => {
    setShowTechSkills(showTechSkills => !showTechSkills);
  }

  // print projects
  const printProjects = () => {
    return (
      <>
        {projects.map(project => {
          return (
            <div key={project.id} className="rounded-md min-w-full flex flex-col gap-2 mb-2">
              <ul className="p-2 flex justify-center m-auto h-full border w-full rounded-lg bg-primary text-secondary">
                <li className="w-full flex flex-col">
                  <h2 className="text-2xl text-center m-2">{project.title}</h2>
                  {project.img && (
                    <Image src={project.img} alt={project.alt || 'Default project image alt text'} className="border h-3/4 w-4/5 m-auto rounded-md" />
                  )}
                  
                  <p className="p-2">{project.blurb}</p>
                  <div className="flex justify-around">
                    <Link href='' className="border p-2 rounded-md hover:pointer hover:text-primary hover:bg-secondary hover:shadow-md hover:shadow-primary hover:scale-95">View Project</Link>
                    <Link href=''  className="border p-2 rounded-md hover:pointer hover:text-primary hover:bg-secondary hover:shadow-md hover:shadow-primary hover:scale-95">Visit Github Repo</Link>
                  </div>
                </li>
              </ul>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <section className="text-center lg:text-left text-secondary min-h-full flex flex-col gap-3 p-4 w-full">

      {/* title */}
      <h1 className="text-center m-3 text-4xl">
        James Huff, The Person Beyond the Screen
      </h1>

      {/* intro, sidemenu */}
      <div className="text-center flex flex-col lg:text-left lg:flex-row lg:justify-between">

        {/* intro */}
        <div className="mb-2 md:mb-0 rounded-lg bg-primary text-secondary md:w-3/5 border border-secondary">
          {/* intro statement */}
          <div className="flex flex-col gap-3 lg:text-xl p-2">
            <h1 className="lg:text-3xl">My Vision and Core Values</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicit udin mauris. Integer in mauris eu nibh euismod gravida.
            </p>
            <div className="flex w-full">
              <div className="flex justify-evenly align-center w-1/2">
                <div className="w-full flex items-center justify-evenly p-2 m-2 cursor-pointer rounded-md border border-transparent hover:border-secondary hover:text-primary hover:bg-secondary hover:scale-95">
                  <p>Contact Me</p>
                  <FaArrowLeft className="animate-bounce" />
                </div>
              </div>
              

              <div className="flex justify-evenly align-center w-1/2">
                <div className="w-full flex items-center justify-evenly p-2 m-2 cursor-pointer rounded-md border border-transparent hover:border-secondary hover:text-primary hover:bg-secondary hover:scale-95">
                  <p>Download My Resume</p>
                  <FaDownload className="animate-boink" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* dropdown lists */}
        <div className="w-full md:w-1/5 flex flex-col gap-3">

          {/* General Interests Dropdown */}
          <div className="flex flex-col border-2 border-secondary rounded-lg bg-primary text-left">
            <div className="flex justify-between align-center p-2">
              <h1>General Interests</h1>
              <FaPlus onClick={show1} className={`cursor-pointer p-0 m-0 h-5 active:duration-300 active:rotate-90`} />
            </div>
            <ul className={`${showInterests ? 'flex-col' : 'hidden'} p-2`}>
              {interests.map(interest => <li key={interest.id}>{interest.title}</ li>)}
            </ul>
          </div>

          {/* Soft Skills Dropdown */}
          <div className="flex flex-col border-2 border-secondary rounded-lg bg-primary text-left">
            <div className="flex justify-between align-center p-2">
              <h1>Soft Skills</h1>
              <FaPlus className="cursor-pointer p-0 m-0 h-5 active:duration-300 active:rotate-90" onClick={show2} />
            </div>
            <ul className={`${showSoftSkills ? 'flex-col' : 'hidden'} p-2`}>
              {softSkills.map(skill => <li key={skill.id}>{skill.title}</ li>)}
            </ul>
          </div>

          {/* Technical Skills Dropdown */}
          <div className="flex flex-col border-2 border-secondary rounded-lg bg-primary text-left">
            <div className="flex justify-between align-center p-2">
              <h1>Technical Skills</h1>
              <FaPlus className="cursor-pointer p-0 m-0 h-5 active:duration-300 active:rotate-90" onClick={show3} />
            </div>
            <ul className={`${showTechSkills ? 'flex-col' : 'hidden'} p-2`}>
              {techSkills.map(skill => <li key={skill.id}>{skill.title}</ li>)}
            </ul>
          </div>

        </div>
      </div>

      {/* projects section */}
      <div className="flex flex-col items-center justify-center p-2">
        <h1 className="text-4xl m-4 relative text-center">My Work</h1>
        <div className="projects_scroll flex lg:grid lg:grid-cols-3 w-4/5 lg:w-full md:min-h-screen gap-2 overflow-x-scroll lg:overflow-hidden h-96">
          {printProjects()}
        </div>
      </div>

      <div></div>
    </section>
  )
}