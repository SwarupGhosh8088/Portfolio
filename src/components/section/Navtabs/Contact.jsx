import anime from "../../../../public/anime.jpg";
import { FaUserPlus } from "react-icons/fa";
import hero from "../../../assets/hero.png";
import linkdin from "../../../assets/linkedin.png";
import youtube from "../../../assets/youtube.png";
import github from "../../../assets/github.png";

const Contact = ({ darkMode }) => {
  const bg = darkMode ? "bg-black text-white" : "bg-white text-gray-900";
  const cardBg = darkMode ? "bg-neutral-900" : "bg-gray-100";
  const inputBg = darkMode ? "bg-neutral-800 text-white" : "bg-white text-black";
  const labelText = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`${bg} p-10 flex justify-around items-center flex-wrap gap-10 mt-12`}>

      {/*Left Section */}
      <div className="flex flex-col gap-5 items-center">
        <img src={anime} className="rounded-xl w-80 h-72 object-cover" alt="profile" />

        <div className="flex justify-center items-center p-4 gap-4">
          <a href="https://www.instagram.com/swarupghosh04">
            <img src={hero} alt="instagram" className="w-10 h-10 rounded-full bg-white hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/in/swarup-ghosh-">
            <img src={linkdin} alt="linkedin" className="w-10 h-10 rounded-full bg-white hover:scale-110 transition" />
          </a>
          <a href="https://www.youtube.com/@swarupghosh">
            <img src={youtube} alt="youtube" className="w-10 h-10 rounded-full bg-white hover:scale-110 transition" />
          </a>
          <a href="https://github.com/swarupghosh">
            <img src={github} alt="github" className="w-10 h-10 rounded-full bg-white hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* Form Section */}
      <form className={`flex flex-col rounded-xl gap-3 ${cardBg} w-[400px] p-6 shadow-lg`}>

        <h2 className="text-2xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className={`text-sm text-center mb-4 ${labelText}`}>
          Have a project or idea? Let's connect.
        </p>

        <label className={labelText}>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className={`p-2 rounded-lg border ${inputBg}`}
        />

        <label className={labelText}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className={`p-2 rounded-lg border ${inputBg}`}
        />

        <label className={labelText}>Message</label>
        <textarea
          placeholder="Write your message..."
          className={`p-2 rounded-lg border h-32 resize-none ${inputBg}`}
        />

        <button
          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=someone@gmail.com?subject=Hello&body=I%20want%20to%20connect%20with%20you", "_blank")}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-xl flex items-center justify-center gap-2 ml-17 mt-3 w-50 transition"
        >
          <span className="font-semibold">Send Message</span>
          <FaUserPlus />
        </button>
      </form>
    </div>
  );
};

export default Contact;