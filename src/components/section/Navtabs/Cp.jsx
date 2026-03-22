import React, { useState, useEffect } from "react";

const Cp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://newsdata.io/api/1/latest?apikey=pub_9239fb7e7a6a4d8aa9322849fcce0a16")
      .then(res => res.json())
      .then(res => setData(res.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-20 flex flex-col gap-8 ">
      <h2 className="font-bold text-3xl p-3 ">Latest News</h2>

      {data.map((news, index) => (
        <div
          key={index}
          
          className=" bg-blue-950 p-8 flex flex-col gap-5 rounded-4xl w-150"
        >
          <h3><strong>HEADLINE :</strong> {news.title}</h3>
          <p>{news.description}</p>

          {news.image_url && (
            <img
              src={news.image_url}
              alt="news"
              className="h-60  w-100 rounded-2xl"
            />
          )}

          <a href={news.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Cp;