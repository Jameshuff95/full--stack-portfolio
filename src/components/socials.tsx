'use client';
import styles from '@/app/ui/css_modules/socials.module.css';

import Link from "next/link"
import { FaGithub, FaStackOverflow, FaLinkedin, FaInstagram, FaSnapchat} from "react-icons/fa6"
import {MdOutlineEmail} from 'react-icons/md';

export default function Socials() {
  return (
    <div className="flex flex-col justify-evenly">
      <h1 className="text-4xl md:text-5xl text-center">Contact Me</h1>
      <div className="w-full grid grid-cols-2 items-center md:grid-cols-3 text-6xl md:text-7xl p-4">
        <Link href="#" aria-label="github" className={styles.social}>
          <FaGithub className="cursor-pointer text-purple-600" />
          <p className="text-4xl text-center">Github</p>
        </Link>
        <Link href="#" aria-label="stack overflow" className={styles.social}>
          <FaStackOverflow className="cursor-pointer text-orange-600" />
          <p className="text-4xl text-center">Stack Overflow</p>
        </Link>
        <Link href="#" aria-label="linkedin" className={styles.social}>
          <FaLinkedin className="cursor-pointer text-blue-800" />
          <p className="text-4xl text-center">LinkedIn</p>
        </Link>
        <Link href="#" aria-label="email me" className={styles.social}>
          <MdOutlineEmail className="cursor-pointer text-red-700"/>
          <p className="text-4xl text-center">Email</p>
        </Link>
        <Link href="#" aria-label="instagram" className={styles.social}>
          <FaInstagram className="cursor-pointer text-pink-500"/>
          <p className="text-4xl text-center">Instagram</p>
        </Link>
        <Link href="#" aria-label="snapchat" className={styles.social}>
          <FaSnapchat className="cursor-pointer text-yellow-400"/>
          <p className="text-4xl text-center">Snapchat</p>
        </Link>
      </div>
    </div>
  )
}