import React from "react";
import educationData from "../../data/eduction.json";
import experienceData from "../../data/experience.json";

const Education = ({ darkMode }) => {
  const bg = darkMode ? "bg-black text-white" : "bg-white text-gray-900";
  const cardBg = darkMode ? "bg-gray-900" : "bg-gray-100";

  return (
    <div id="edu" className={`w-full p-6 ${bg} transition-colors duration-300`}>
      {/* Section Header */}
      <h2 className="text-2xl font-bold mb-6 relative inline-block p-5">
        Education & Experience
        <span className="absolute left-0 bottom-0 h-0.5 w-86 ml-5 bg-amber-500 rounded-full"></span>
      </h2>

      {/* Container */}
      <div className="flex flex-col md:flex-row md:justify-between gap-6">

        {/* Education */}
        <div className="flex flex-col gap-5 flex-1 ml-30 ">
          <h3 className="text-xl font-semibold ml-5">Education</h3>
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col p-3 rounded-xl ${cardBg} shadow-sm hover:shadow-md transition-shadow duration-200 w-100`}
            >
              <p className="text-sm text-gray-400">{item.duration}</p>
              <p className="font-medium">{item.level}</p>
              <p className="text-gray-500">{item.institution}</p>
              <p className="text-gray-400">{item.status}</p>
              <p className="text-gray-400">{item.location}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        {/* <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-xl font-semibold mb-2 ml-5">Experience</h3>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col p-1 rounded-xl ${cardBg} shadow-sm hover:shadow-md transition-shadow duration-200 w-100`}
            >
              <p className="text-sm text-gray-400">{item.duration}</p>
              <p className="font-medium">{item.role}</p>
              <p className="text-gray-500">{item.company}</p>
              <p className="text-gray-400">{item.status}</p>
              <p className="text-gray-400">{item.location}</p>
              <p className="text-gray-500 mt-1 text-sm">{item.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Education;