'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'E-Commerce Store',
    description: 'A full-featured e-commerce website using Sanity and Stripe. Built with Next.js and Tailwind CSS.',
    img: '/furniro.png',
    link: 'https://hackthon-p7gc.vercel.app/',
  },
  {
    title: 'Design Portfolio',
    description: 'A portfolio website for designers.',
    img: '/dsgnr.png',
    link: 'https://assignment-6-smoky-pi.vercel.app/',
  },
  {
    title: ' Countdown Timer',
    description: 'A simple countdown timer built with Next.js and Tailwind CSS.',
    img: '/countdowntimer.png',
    link: 'https://count-down-timer-lxfv.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-28 px-8 ">
      <h2 className="text-4xl font-bold text-center text-[#ba294d] mb-10">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="overflow-hidden rounded-lg mb-4">
              <Image src={project.img} alt={project.title} width={400} height={250} className="rounded-lg" />
            </div>
            <h3 className="text-2xl font-semibold text-[#ba294d]">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <Link href={project.link} target="_blank" className="inline-block mt-4 px-6 py-2 bg-[#ba294d] text-white rounded-full hover:bg-red-500 transition">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
