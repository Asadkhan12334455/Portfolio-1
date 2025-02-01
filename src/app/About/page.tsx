'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-16 px-8 py-16 bg-black text-white">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-5xl font-bold text-[#ba294d]">About Me</h2>
        <p className="text-lg mt-4">
        I am an enthusiastic Front-End Developer with a solid foundation in web development. My journey started with HTML, CSS, and JavaScript, and has now evolved into specializing in the creation of modern, high-performance web applications using Next.js and Tailwind CSS.        </p>
        <p className="text-lg mt-4">
        I am constantly eager to learn new technologies and enhance my problem-solving abilities. Currently, I am delving into back-end development with the goal of becoming a proficient full-stack developer, building end-to-end solutions.        </p>
        <Link href="/Contact" className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-[#ba294d] border-2 border-[#ba294d] rounded-full hover:bg-[#ba294d] hover:text-black transition">
          Contact Me
        </Link>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg w-64 md:w-80">
        <Image src="/profile.jpeg" alt="About Me" width={320} height={320} className="rounded-lg filter brightness-125" />
      </div>
    </section>
  );
}
