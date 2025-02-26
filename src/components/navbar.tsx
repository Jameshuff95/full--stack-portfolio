'use client';

import Link from 'next/link';
import { FiAlignJustify } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaSun, FaMoon } from 'react-icons/fa6';
//import ThemeToggle from './themeToggle';

type NavLink = {
  id: number;
  name?: string;
  href: string;
  icon?: React.ReactNode;
  color?: string;
}

// link info
export const links: NavLink[] = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About', href: '/about' },
  { id: 3, name: 'Blog', href: '/blog' },
  { id: 4, name: 'Contact', href: '/contact' },
];

// navIcon info
const navIcons: NavLink[] = [
  {
    id: 1,
    name: 'Github',
    href: '#',
    icon: <FaGithub />,
    color: 'text-purple-800',
  },
  {
    id: 2,
    name: 'Stack Overflow',
    href: '#',
    icon: <FaStackOverflow />,
    color: 'text-orange-600',
  },
  {
    id: 3,
    name: 'LinkedIn',
    href: '#',
    icon: <FaLinkedin />,
    color: 'text-blue-900',
  },
  {
    id: 4,
    name: 'Email',
    href: '#',
    icon: <MdOutlineEmail />,
    color: 'text-red-800',
  },
];

export interface ThemeProps {
  theme: string;
  switchTheme: () => void;
}

const Navbar = ({ theme, switchTheme }:ThemeProps) => {


  const pathname = usePathname();
  const [ toggleNav, setToggleNav ] = useState(false);
  const [ screenWidth, setScreenWidth ] = useState(0);


  // this shows the small nav menu if applicable
  const handleClick = () => {
    setToggleNav(!toggleNav);
  }

  // handles screen re-sizing acting as a media query
  useEffect(() => {

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setToggleNav(false);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  // tracks current url path
  useEffect(() => {
    // This will run on initial mount and whenever the pathname changes
  }, [pathname]);

  // prints social links below, no need to change so far...
  const printLinks = () => {
    return (
        links.map(link => (
        <Link 
          key={link.id}
          href={link.href}
          onClick={screenWidth < 768 ? handleClick : undefined}
          className={`
            ${screenWidth < 768 ? 'text-primary hover:text-secondary hover:bg-primary' : ''}
            ${pathname === link.href ? "md:border-b-2 md:border-secondary" : "md:hover:border-b-2 border-text"} 
            cursor-pointer hover:bg-primary md:hover:bg-transparent flex justify-center items-center transition-all duration-100 h-1/4 md:h-3/4 md:text-2xl lg:text-3xl text-secondary
          `}
        >
          {link.name}
        </Link>
      ))
    )
  }

  // prints social icons below, no need to change so far...
  const printSocials = () => {
    return (
      navIcons.map((navIcon) => (
        <Link key={navIcon.id} href={navIcon.href}>
          <span className={`flex flex-col text-center items-center p-5 md:p-0 md:text-2xl lg:text-3xl hover:scale-110 ${navIcon.color}`}>
            <span>{navIcon.icon}</span>
            <p className="hidden md:flex md:text-xs lg:text-xl">{navIcon.name}</p>
          </span>
        </Link>
      ))
    )
  }

  return (
    <article className="h-20 w-full full flex justify-between md:justify-evenly items-center px-5 md:px-0">

      <button className="text-4xl hover:scale-95 md:ml-5" onClick={switchTheme}>
        {theme === 'theme-light' ? 
          <FaSun className="text-orange-600" /> :
          <FaMoon className="text-blue-300"/>  
        }
      </button>

      {/* open nav */}
      <div className="md:hidden">
        <FiAlignJustify className="cursor-pointer text-5xl border border-transparent hover:border-border rounded-md p-1 text-text" onClick={handleClick} />
      </div>
      
      {/* large nav */}
      <nav className="hidden w-full h-full md:flex md:justify-between lg:justify-start">
        <div className="md:flex items-center md:justify-evenly md:w-3/5">
          {printLinks()}
        </div>
        <div className="py-3 flex items-start justify-evenly w-2/5">
          {printSocials()}
        </div>
      </nav>

      {/* small nav */}
      <nav className={`${toggleNav ? 'flex' : 'hidden'} border rounded-md fixed left-1/2 -translate-x-1/2 top-20 w-3/4 h-4/5 flex-col justify-evenly bg-secondary text-primary`}>
        <div className="text-3xl h-5/6 flex flex-col justify-evenly">
          {printLinks()}
        </div>
        <div className="flex text-4xl items-center justify-evenly w-full h-1/6">
          {printSocials()}
        </div>
      </nav>

    </article>
  );
};

export default Navbar;