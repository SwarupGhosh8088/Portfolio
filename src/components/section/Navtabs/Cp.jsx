import React, { useEffect, useState } from "react";

const Cp = () => {
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

  // LeetCode Data
  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/SwarupGhosh726")
      .then(res => res.json())
      .then(data => {
        setLcData(data);
        setLoadingLC(false);
      })
      .catch(err => {
        console.log(err);
        setLoadingLC(false);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6  mt-15 text-white space-y-10">

      {/* LeetCode Section */}
      <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg flex">
        <div>
          <h2 className="text-2xl font-semibold mb-4">LeetCode</h2>

          <img
            src="https://leetcard.jacoblin.cool/SwarupGhosh726"
            alt="LeetCode Card"
            className="w-100 rounded-xl mb-4"
          />


        </div>


        {loadingLC ? (
          <p className="text-gray-400">Loading LeetCode...</p>
        ) : lcData && !lcData.errors ? (
          <div className="space-y-1">
            <p><span className="font-semibold">Total:</span> {lcData.totalSolved}</p>
            <p>Easy: {lcData.easySolved}</p>
            <p>Medium: {lcData.mediumSolved}</p>
            <p>Hard: {lcData.hardSolved}</p>
          </div>
        ) : (
          <p className="text-yellow-400 text-sm">
            Stats unavailable — showing profile card instead
          </p>
        )}
      </div>

      {/*  GitHub Section */}
      <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">GitHub</h2>

        <img
          src="https://github-readme-stats.vercel.app/api?username=SwarupGhosh8088&show_icons=true&theme=dark"
          alt="GitHub Stats"
          className="rounded-xl mb-4"
        />

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
                className="bg-zinc-800 p-4 rounded-xl hover:bg-zinc-700 transition"
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