import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {

  const handleEmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=yourmail@gmail.com",
      "_blank"
    );
  };

  return (
    <footer className="bg-gray-900 text-white  p-5 shadow-2xl rounded-tl-4xl  rounded-tr-4xl ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold">Swarup Ghosh</h1>
          <p className="text-gray-400 mt-2">
            Full Stack Developer building Crazzzzzzzyyyyyy Stuffs
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-mb font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Connect</h2>

          <div className="flex gap-4 text-xl mb-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-300 cursor-pointer" />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            </a>

            <button onClick={handleEmail}>
              <FaEnvelope className="hover:text-red-400 cursor-pointer" />
            </button>
          </div>

          <p className="text-gray-400 text-sm">
            Email: ghoshswarup726@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 p-2">
        © {new Date().getFullYear()} Swarup Ghosh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;