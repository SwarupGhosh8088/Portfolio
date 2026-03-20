import projects from "../../data/project.json";

const Projects = ({darkMode}) => {
  return (
    <div id="projects" className={`py-16 px-6 ${darkMode ?"bg-black text-white":"bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-10 border-b-2 border-yellow-400 inline-block">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={ `rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 ${darkMode ?" bg-gray-950 text-white":"bg-white shadow-gray-300  border-b-gray-800 text-black"}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full p-1  h-48 object-cover transition-transform duration-300 hover:-rotate-5"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>

                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-black px-2 py-1 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm border px-3 py-1 rounded hover:bg-white hover:text-black"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm bg-yellow-400 text-black px-3 py-1 rounded hover:opacity-80"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
