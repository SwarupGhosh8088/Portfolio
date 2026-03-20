import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`p-6 h-15 w-full flex justify-between items-center fixed top-0   shadow-2xl ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {" "}
      {/* Logo */}
      <div className="text-2xl font-semibold">
        <Link to="/">
          Swarup <span className="text-blue-400">G.</span>
        </Link>
      </div>
      {/* Menu */}
      <div className="  flex  gap-8">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/cp" className="hover:text-blue-400">
          Competative Programming
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
      {/* Resume */}
      <div className="flex gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={" h-10 w-10 rounded-full text-blue-50 "}
        >
          {darkMode ? (
            <MdDarkMode className="h-7 w-7 " />
          ) : (
            <MdLightMode className="h-7 w-7 hover:transform hover:scale-120 text-black" />
          )}
        </button>

        <button className=" bg-blue-600 h-10 flex items-center  justify-center gap-4 w-30 rounded-xl text-blue-50 hover:text-zinc-900 font-bold hover:bg-blue-700">
          Resume
          <FaDownload className="h-4 w-4 " />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
