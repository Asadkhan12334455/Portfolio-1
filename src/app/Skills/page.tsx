'use client';

import React from 'react';
import Image from 'next/image';

const skillsData = [
  { name: 'CSS', image: '/css.png' },
  { name: 'PYTHON', image: '/python.png' },
  { name: 'NEXT.JS', image: '/nextjs.png' },
  { name: 'HTML', image: '/html.png' },
  { name: 'JAVASCRIPT', image: '/javascript.png' },
  { name: 'VSCODE', image: '/vscode.png' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-[#ba294d] drop-shadow-lg">
        Skills
      </h2>
      <div className="bg-[#771b32] rounded-xl p-6 sm:p-10 w-full max-w-6xl mx-auto shadow-2xl transform hover:scale-105 transition duration-500">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-gray-800 rounded-xl transition-all transform hover:shadow-2xl hover:scale-105 cursor-pointer flex flex-col items-center perspective-1000 shadow-md hover:shadow-red-500/50"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 transform transition-transform duration-500 hover:rotate-y-180 hover:scale-110">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={96}
                  height={96}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <span className="text-lg sm:text-2xl font-semibold mt-4 text-[#f9fafb] drop-shadow-md">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
