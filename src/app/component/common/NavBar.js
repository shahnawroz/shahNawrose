"use client";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Apply or remove the `dark` class on the `<html>` tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background text-foreground p-4 flex justify-between items-center shadow-md">
      {/* Left Side: Logo */}
      <div className="text-2xl font-bold">
        <span className={`${
          darkMode
            ? "text-custom-dark"
            : "text-custom-blue"
        }`}>Shah Nawrose</span>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 rounded-md"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Right Side: Navigation */}
      <ul
        className={`lg:flex items-center space-x-8 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "flex-col space-y-4 absolute top-16 left-0 w-full bg-background p-4 lg:static lg:flex-row lg:space-y-0 lg:space-x-8"
            : "hidden"
        }`}
      >
        <li className="flex items-center">
        
        </li>
        <li className="flex items-center">
        <a href="#about" className="hover:opacity-75">
            About
          </a>
        </li>
        <li className="flex items-center">
          <a href="#education" className="hover:opacity-75">
            Education
          </a>
        </li>
        <li className="flex items-center">
          <a href="#skill" className="hover:opacity-75">
            Skill
          </a>
        </li>
        <li className="flex items-center">
          <a href="#projects" className="hover:opacity-75">
            Projects
          </a>
        </li>
        <li className="flex items-center">
          <a href="#experience" className="hover:opacity-75">
            Experience
          </a>
        </li>
        <li className="flex items-center">
          <a href="#contact" className="hover:opacity-75">
            Contact
          </a>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Theme"
        className={`p-2 rounded-md ml-4 ${
          darkMode
            ? "hover:bg-white hover:text-black"
            : "hover:bg-black hover:text-white"
        }`}
      >
        {darkMode ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>
    </nav>
  );
}
