import React, { useEffect, useState } from "react";
import leetimg from "../../../../public/leetimg.png"
import { GitHubCalendar } from "react-github-calendar";
import { href } from "react-router-dom";

const Cp = ({ darkMode }) => {

  const bg = darkMode ? "bg-black text-white" : "bg-white text-gray-900";
  const cardBg = darkMode ? "bg-neutral-900" : "bg-gray-100";
  const inputBg = darkMode ? "bg-neutral-800 text-white" : "bg-white text-black";
  const labelText = darkMode ? "text-gray-300" : "text-gray-700";


  const [repos, setRepos] = useState([]);
  const [lcData, setLcData] = useState(null);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [loadingLC, setLoadingLC] = useState(true);

  // 🔹 GitHub Data
  useEffect(() => {
    fetch("https://api.github.com/users/SwarupGhosh8088/repos")
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        setRepos(sorted);
        setLoadingRepos(false);
      })
      .catch(err => {
        console.log(err);
        setLoadingRepos(false);
      });
  }, []);



  return (
    <div className={` ${bg}  mx-auto p-6  mt-13 text-white space-y-10`}>

      {/* LeetCode Section */}
      <div className={` ${bg} rounded-2xl shadow-lg flex  gap-4 items-center justify-center m-4 p-1 border`}>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4 ml-84  mt-5 ">LeetCode</h2>
          <img className="w-100 md-100 rounded-xl mb-4"
            src="https://leetcard.jacoblin.cool/SwarupGhosh726?theme=dark&ext=heatmap" />
        </div>

        {/*left*/}
        <div className={` ${bg}flex justify-center items-center py-10`}>
          <div className="bg-black border-1 text-white rounded-2xl shadow-xl p-6 w-[320px] text-center hover:scale-105 transition-all duration-300">
            
            <h2 className="text-2xl font-semibold mb-2">LeetCode Profile</h2>

            <p className={` ${cardBg}text-gray-400 mb-4`}>
              Username: <span className="text-green-400 font-medium">SwarupGhosh726</span>
            </p>

            <a
              href="https://leetcode.com/u/SwarupGhosh726/"
              target="_blank"
              rel="noopener noreferrer"
              className={` ${bg}inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-2 rounded-xl transition`}
            >
              Visit Profile
            </a>

          </div>
        </div>


      </div>

      {/*  GitHub Section */}
      <div className={` ${bg} p-4 rounded-2xl shadow-lg g-2  flex flex-col gap-4 items-center justify-center border-1`}>
        <h2 className="text-2xl font-semibold mb-4 items-center">GitHub</h2>

        <img
          src="https://github-readme-stats.vercel.app/api?username=SwarupGhosh8088&show_icons=true&theme=dark"
          alt="GitHub Stats"
          className="rounded-xl mb-4 ml-5"
        />
        <GitHubCalendar

          username="SwarupGhosh8088" />

        <p className="text-gray-400 text-sm mb-4">
          Building full-stack applications and real-world projects
        </p>

        <h3 className="text-xl font-semibold mb-3">Top Projects</h3>

        {loadingRepos ? (
          <p className="text-gray-400">Loading Repositories...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {repos.map(repo => (
              <div
                key={repo.id}
                className={` ${bg} p-4 rounded-xl hover:bg-zinc-700 transition border-1`}
              >
                <h4 className="font-semibold text-lg">{repo.name}</h4>
                <p className="text-sm text-gray-400 mb-2">
                  {repo.description || "No description available"}
                </p>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 text-sm hover:underline"
                >
                  View Repo →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Cp;