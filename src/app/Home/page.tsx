"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Homepage = () => {
  return (
    <div>
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-16 px-8 py-16 bg-black text-white"
      >
        <div className="rounded-full overflow-hidden shadow-lg w-64 md:w-80 hover:scale-110 transition-transform">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={320}
            height={320}
            className="rounded-full filter brightness-125"
            priority
          />
        </div>

        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-6xl font-bold leading-tight">
            Hi, It&apos;s <span className="text-[#ba294d]">Asad</span>
          </h1>

          <h3 className="text-4xl font-bold mt-4">
            I&apos;m a <span className="text-[#ba294d]">Front-End Developer</span>
          </h3>
          <p className="text-lg mt-4">
            I am a passionate Front-End Developer currently enhancing my skills
            at GIAIC. With expertise in Next.js and Tailwind CSS, I specialize
            in creating responsive, dynamic, and user-friendly interfaces. As I
            advance in my journey, I am expanding my knowledge of back-end
            technologies to develop full-stack applications with seamless
            functionality.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Link
              href="https://github.com/Asadkhan12334455"
              target="_blank"
              className="p-3 bg-transparent border-2 border-[#ba294d] text-[#ba294d] rounded-full hover:bg-[#ba294d] hover:text-black transition"
              aria-label="Github"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/asadkhan47400/?igsh=b2pmeWgwcmlrNDhi#"
              target="_blank"
              className="p-3 bg-transparent border-2 border-[#ba294d] text-[#ba294d] rounded-full hover:bg-[#ba294d] hover:text-black transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@muhammadasadll?_t=ZS-8tYsxj1b2Oo&_r=1"
              target="_blank"
              className="p-3 bg-transparent border-2 border-[#ba294d] text-[#ba294d] rounded-full hover:bg-[#ba294d] hover:text-black transition"
              aria-label="Tiktok"
            >
              <FaTiktok size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-asad-626322285/"
              target="_blank"
              className="p-3 bg-transparent border-2 border-[#ba294d] text-[#ba294d] rounded-full hover:bg-[#ba294d] hover:text-black transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
          <Link
            href="https://perosnal-resume.vercel.app/"
            className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-[#ba294d] border-2 border-[#ba294d] rounded-full hover:bg-[#ba294d] hover:text-black transition"
            aria-label="Hire Me"
          >
            Hire Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
