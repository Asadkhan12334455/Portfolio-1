import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full py-10 bg-black">
      {/* Social Links */}
      <div className="text-center pb-6 text-[#ba294d] flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/muhammad-alwaz-0775a92b7/"
          className="text-2xl border-2 border-[#ba294d] w-10 h-10 flex items-center justify-center rounded-full my-2 mx-4 transition-transform duration-300 ease-in-out hover:bg-[#ba294d] hover:shadow-lg hover:scale-110 hover:text-black"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Alwaz12"
          target="_blank"
          className="text-2xl border-2 border-[#ba294d] w-10 h-10 flex items-center justify-center rounded-full my-2 mx-4 transition-transform duration-300 ease-in-out hover:bg-[#ba294d] hover:shadow-lg hover:scale-110 hover:text-black"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="text-2xl border-2 border-[#ba294d] w-10 h-10 flex items-center justify-center rounded-full my-2 mx-4 transition-transform duration-300 ease-in-out hover:bg-[#ba294d] hover:shadow-lg hover:scale-110 hover:text-black"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          className="text-2xl border-2 border-[#ba294d] w-10 h-10 flex items-center justify-center rounded-full my-2 mx-4 transition-transform duration-300 ease-in-out hover:bg-[#ba294d] hover:shadow-lg hover:scale-110 hover:text-black"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Footer Links */}
      <ul className="text-center list-none px-0 text-xl leading-6 text-white">
        <li className="inline-block px-4">
          <a href="#" className="border-b-2 border-transparent hover:border-white">
            FQA
          </a>
        </li>
        <li className="inline-block px-4">
          <a href="#" className="border-b-2 border-transparent hover:border-white">
            About Me
          </a>
        </li>
        <li className="inline-block px-4">
          <a href="#" className="border-b-2 border-transparent hover:border-white">
            Services
          </a>
        </li>
        <li className="inline-block px-4">
          <a href="#" className="border-b-2 border-transparent hover:border-white">
            Privacy policy
          </a>
        </li>
      </ul>

      {/* Copyright */}
      <p className="mt-12 text-center text-lg text-white">
        © 2025-2030 Alwaz All rights reserved. Licensed
      </p>
    </footer>
  );
};

export default Footer;
