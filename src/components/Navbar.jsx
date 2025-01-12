import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import logo from "../assets/logo.png";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-yellow-500 bg-yellow-400/65 px-12 py-2 text-white backdrop-blur-md md:justify-evenly selection:bg-purple-300 selection:text-yellow-900">
      <div className="flex justify-start items-center gap-2">
        <img src={logo} alt="" className="h-28 w-28 items-center justify-start" />

        <a href="#home" className="text-4xl font-semibold transition-all opacity-80 duration-200 hover:opacity-100 items-center">
          Shalap
        </a>
      </div>

      <ul className="hidden md:flex gap-10">
        <a href="#home" className="text-xl cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100">
          Home
        </a>
        <a href="#tech" className="text-xl cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100">
          Tech
        </a>
        <a href="#projects" className="text-xl cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100">
          Projects
        </a>
        <a href="#contact" className="text-xl cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100">
          Contact
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-2xl opacity-70 transition-all duration-200 hover:text-purple-300 hover:opacity-100">
          <a href="https://linkedin.com/in/shalap" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <BsLinkedin />
          </a>
        </li>

        <li className="cursor-pointer text-2xl opacity-70 transition-all duration-200 hover:text-purple-300 hover:opacity-100">
          <a href="https://www.instagram.com/beagleeagle21/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <BsInstagram />
          </a>
        </li>

        <li className="cursor-pointer text-2xl opacity-70 transition-all duration-200 hover:text-purple-300 hover:opacity-100">
          <a href="https://github.com/BeagleEagle21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <BsGithub />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX onClick={menuOpen} className="block md:hidden text-4xl cursor-pointer" />
      ) : (
        <BiMenu onClick={menuOpen} className="block md:hidden text-4xl cursor-pointer" />
      )}

      {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 $isOpen ? "block" : "hidden"`}>
          <ul className="flex flex-col gap-8">
            <a href="#home" className="text-xl cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100">
              Home
            </a>
            <a href="#tech" className="text-xl cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100">
              Tech
            </a>
            <a href="#projects" className="text-xl cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100">
              Projects
            </a>
            <a href="#contact" className="text-xl cursor-pointer opacity-80 transition-all duration-200 hover:opacity-100">
              Contact
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-200 hover:text-purple-300 hover:opacity-100">
              <a href="https://linkedin.com/in/shalap" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <BsLinkedin />
              </a>
            </li>

            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-200 hover:text-purple-300 hover:opacity-100">
              <a href="https://www.instagram.com/beagleeagle21/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <BsInstagram />
              </a>
            </li>

            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-200 hover:text-purple-300 hover:opacity-100">
              <a href="https://github.com/BeagleEagle21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
