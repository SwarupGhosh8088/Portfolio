import anime from "../../../../public/anime.jpg";
import { FaUserPlus } from "react-icons/fa";
import hero from "../../../assets/hero.png";
import linkdin from "../../../assets/linkedin.png";
import youtube from "../../../assets/youtube.png";
import github from "../../../assets/github.png";

const Contact = ({darkMode}) => {

  const bg = darkMode ? "bg-black text-white" : "bg-white text-gray-900";
  return (
    <div className={`${bg} p-10 flex  justify-around items-center`}>
      <div className="flex flex-col gap-5">
        <img src={anime} className="rounded  w-90  h-80  " alt="" />

        <div className="flex justify-center items-center  p-4 gap-4 hover:rounded-3xl">
          <a href="https://www.instagram.com/swarupghosh04">
            <img
              src={hero}
              alt=""
              className="w-10 h-10 rounded-[70%] bg-white transform transition-all hover:scale-110"
            />
          </a>
          <a href="https://www.linkedin.com/in/swarup-ghosh-">
            <img
              src={linkdin}
              alt=""
              className="w-10 h-10 rounded-full bg-white transform transition-all hover:scale-110"
            />
          </a>
          <a href="https://www.youtube.com/@swarupghosh">
            <img
              src={youtube}
              alt=""
              className="w-10 h-10 rounded-full bg-white transform transition-all hover:scale-110"
            />
          </a>
          <a href="https://github.com/swarupghosh">
            <img
              src={github}
              alt=""
              className="w-10 h-10 rounded-full bg-white transform transition-all hover:scale-110"
            />
          </a>{" "}
        </div>
      </div>

      <form className={`flex flex-col rounded gap-2 ${darkMode ? "bg-neutral-900 text-white" : "bg-mist-300 text-gray-900"}  h-130 w-120 mt-15  item-center justify-center p-5`}>
        <label className="text-white mb-10 -4 font-bold text-2xl text-center font-inter">
          Work With Our Team
        </label>

        <label className="text-white mb-2">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="border-y p-2 bg-neutral-800 rounded-lg  w-90"
        />

        <label className="text-white mb-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="border-y p-2 bg-neutral-800 rounded-lg w-90"
        />

        <label className="text-white mb-2">Message</label>
        <input
          type="text"
          placeholder="Message"
          className="border p-2 bg-neutral-800 rounded-lg w-110 h-50"
        />
        <button className="bg-blue-500 text-white p-2 w-40 text-center ml-35 rounded-3xl flex items-center gap-2 justify-center">
          <h1 className="text-xl font-bold">Join Us</h1>

          <FaUserPlus className=" " />
        </button>
      </form>
    </div>
  );
};

export default Contact;
