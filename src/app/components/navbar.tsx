'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaBars } from 'react-icons/fa';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <header className="fixed top-0 left-0 w-full px-8 py-6 bg-black bg-opacity-70 shadow-lg flex justify-between items-center z-50">
        <Link href="#" className="text-5xl font-bold text-[#ba294d] transition-transform hover:scale-110 hover:text-red-500">
          ASAD
        </Link>
        <FaBars className="text-4xl text-[#ba294d] md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
          <nav className={`md:flex md:gap-8 absolute md:static top-full right-0 w-40 md:w-auto bg-black border-l-2 border-b-2 border-[#ba294d] md:border-none p-4 md:p-0 rounded-bl-2xl transition-all ${menuOpen ? 'block' : 'hidden'}`}>
            <Link href="/" className="block md:inline-block text-lg text-white hover:text-[#ba294d] border-b-2 border-transparent hover:border-[#ba294d] px-4 py-2">
            Home
            </Link>
            <Link href="/About" className="block md:inline-block text-lg text-white hover:text-[#ba294d] border-b-2 border-transparent hover:border-[#ba294d] px-4 py-2">
            About
            </Link>
            <Link href={"/Skills"} className="block md:inline-block text-lg text-white hover:text-[#ba294d] border-b-2 border-transparent hover:border-[#ba294d] px-4 py-2">
            Skills
            </Link>
            <Link href={"/Projects"} className="block md:inline-block text-lg text-white hover:text-[#ba294d] border-b-2 border-transparent hover:border-[#ba294d] px-4 py-2">
            Projects
            </Link>
            <Link href={"/Contact"} className="block md:inline-block text-lg text-white hover:text-[#ba294d] border-b-2 border-transparent hover:border-[#ba294d] px-4 py-2">
            Contact
            </Link>
          </nav>
      </header>
    </>
  );
}
