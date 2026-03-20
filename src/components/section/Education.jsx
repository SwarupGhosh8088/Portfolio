import React from "react";
import educationData from "../../data/eduction.json";

const Education = () => {
  return (
    <div>
      <div className="edu" id="edu">
        <h2 className="text-2xl font-bold  mb-25 ml-15">
          Education Qualification
          <div className="bg-amber-50  h-0.5 w-90  mt-2"></div>
        </h2>

        <div className="flex mx-30">
          <div className="flex flex-col justify-around">
            {educationData.map((edu) => (
              <div
                className="flex bg-gray-800 flex-col  rounded-lg w-auto p-1 ml-9"
                key={edu.id}
              >
                <img className="w-70 h-40" src={edu.image} />
              </div>
            ))}
          </div>

          <div className="bg-amber-50  h-130 w-1  ml-25 flex flex-col justify-around">
            <div className="bg-amber-50 h-1  w-10 "></div>
            <div className="bg-amber-50 h-1  w-10 "></div>
            <div className="bg-amber-50 h-1  w-10 "></div>
          </div>

          <div className="flex flex-col justify-around">
            {educationData.map((edu) => (
              <div
                className="flex bg-gray-900 flex-col rounded-lg w-80 p-4 ml-9"
                key={edu.id}
              >
                <h3 className="text-xl ml-10 font-semibold">{edu.level}</h3>
                <p className="ml-10">{edu.institution}</p>
                <p className="ml-10">{edu.location}</p>
                <p className="ml-10">{edu.status}</p>
                <p className="ml-10">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Skills*/}
    </div>
  );
};

export default Education;
