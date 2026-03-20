import React from "react";
import skill from "../../data/skill.json";

const Skills = ({darkMode}) => {
  return (
    <div id="skills" className={`${darkMode ?"bg-black text-white":"bg-white text-black"} pb-10`} >
      {/* Heading */}
      <div className="" id="skill">
        <h2 className="text-2xl font-bold  mb-15 ml-15">
          Skills
          <div className="bg-amber-500  h-0.5 w-40  mt-2"></div>
        </h2>
      </div>

      <h1 className="text-2xl  font-mono text-center mb-3">
        Things Help Me Build My Stuffs
      </h1>
      {/* Skills Grid */}
      <div className="flex  flex-wrap justify-center items-center gap-15 p-10">
        {skill.map((item, index) => (
          <div
            key={index}
            className={` p-6 rounded-xl text-center  shadow-lg h-20 w-20 ${darkMode ?" bg-gray-900 text-white":"border-r-indigo-100 text-black"} pb-10`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="scale-150 hover:scale-175 transition duration-300"
            />

            <p className="text-lg font-semibold flex justify-center items-center p-7 ">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
