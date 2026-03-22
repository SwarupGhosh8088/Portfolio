import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import clickSound from "../../public/click.wav"


const Navbar = ({ darkMode, setDarkMode }) => {


  function playSound() {
    const audio = new Audio(clickSound);
    audio.play();
  };


  const [open, setOpen] = useState(false);

  return (
    <div
      className={` p-2 w-full flex justify-between items-center fixed top-0 shadow-2xl  ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
    >
      {/* Logo */}
      <div className="text-xl md:text-2xl font-semibold">
        <Link to="/">Swarup <span className="text-blue-400">G.</span></Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/cp" className="hover:text-blue-400">Competative Programming</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Dark Mode */}
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            playSound();
          }}
          className="h-10 w-10 rounded-full text-blue-50"
        >
          {darkMode ? (
            <MdDarkMode className="h-6 w-6 md:h-7 md:w-7" />
          ) : (
            <MdLightMode className="h-6 w-6 md:h-7 md:w-7 text-black" />
          )}
        </button>

        {/* Resume */}
        <button className="bg-blue-600 h-10 flex items-center justify-center gap-2 px-3 md:w-30 rounded-xl text-blue-50 hover:text-zinc-900 font-bold hover:bg-blue-700 text-sm md:text-base">
          <span className="hidden sm:inline">Resume</span>
          <FaDownload className="h-4 w-4" />
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } md:hidden`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/cp" onClick={() => setOpen(false)}>Competative Programming</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;