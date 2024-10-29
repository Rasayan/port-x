"use client"; // For client-side rendering in Next.js app router
import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa"; // Using react-icons for GitHub icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 py-4 px-8 font-mont z-50 backdrop-blur-xl shadow-md flex justify-between items-center">
      <h1 className="text-lg font-normal text-white flex justify-center items-center gap-2">
        <a
          href="https://github.com" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-6 w-6 text-white hover:text-gray-400 duration-150" />
        </a>
        Rasayan
      </h1>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* GitHub Icon */}

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-16">
        {["Hire", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-slate-200 hover:text-white duration-150 font-medium text-base"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 left-0 w-full bg-gray-900 px-8 py-6 flex flex-col items-center gap-6 md:hidden"
        >
          {["Hire", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-slate-200 hover:text-white duration-150 font-medium text-lg"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
