import hero from "../../assets/hero.png";
import linkdin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import github from "../../assets/github.png";
import profile from "../../assets/Screenshot 2026-04-19 215459.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import favi from "../../../public/favi.jpeg"
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skill";

const Home = ({ darkMode }) => {
  return (
    <div className={`flex flex-col  ${darkMode ? "bg-black" : "bg-white"} ${darkMode ? "text-white":"text-black"}`}>
      <div className="flex flex-col sm:flex-row h-screen items-center lg:px-16  lg:gap-10 ">
        {/* LEFT-SOCIAL ICONS */}
        <div className="flex flex-col gap-10 mr-20 mt-20">
          <div className="flex  lg:flex-col lg:gap-2   gap-8  ">
            <a className="transform transition-all hover:scale-110" href="/">
              About Me
            </a>
            <a className="transform transition-all hover:scale-110" href="#edu">
              Education
            </a>
            <a
              className="transform transition-all hover:scale-110"
              href="#skill"
            >
              Skills
            </a>

            <a
              className="transform transition-all hover:scale-110"
              href="#projects"
            >
              Projects
            </a>
          </div>

          <div className="flex flex-col p-4 gap-4 hover:rounded-3xl">
            <a href="https://www.instagram.com/swarupghosh04">
              <img
                src={hero}
                alt=""
                className="w-10 h-10 rounded-[70%] bg-white transform transition-all hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/swarupghosh726">
              <img
                src={linkdin}
                alt=""
                className="w-10 h-10 rounded-full bg-white transform transition-all hover:scale-110"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                src={youtube}
                alt=""
                className="w-10 h-10 rounded-full bg-white transform transition-all hover:scale-110"
              />
            </a>
            <a href="https://github.com/swarupghosh8088">
              <img
                src={github}
                alt=""
                className="w-10 h-10 rounded-full bg-white transform transition-all hover:scale-110"
              />
            </a>{" "}
          </div>
        </div>

        {/* CENTER - HERO TEXT */}
        <div className="flex-3 flex-col">
          <h1 className="text-7xl font-thin tracking-[0.25em] leading-tight mt-35 ">
            SWARUP
            <br />
            GHOSH
          </h1>

          <p className="  text-gray-400 font-light">
            MERN Stack Developer / Web Developer
          </p>

          <p className="text-gray-400 mt-40 ">
            For inquiries, email me at ghoshswarup726@gmail.com
          </p>
        </div>

        {/* RIGHT - ABOUT */}
        <div className="w-[350px] mt-10" flex flex-col>
          <img
            src={profile}
            alt="profile"
            className="w-70 h-70 rounded-full bg-white m-10 tr"
          />
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>

          <p className="text-gray-400 leading-relaxed">
            I am currently in my 2nd year of college pursuing a Bachelor of
            Computer Applications at Adamas University, Kolkata. My main focus
            is web development. I enjoy exploring new technologies and
            frameworks.
          </p>
        </div>
        <br />
      </div>

      {/* Education */}
      <br />
      <Education darkMode={darkMode} />
      <br />
      <Skills  darkMode={darkMode}/>
      <br />
      <Projects darkMode={darkMode} />
    </div>
  );
};

export default Home;
