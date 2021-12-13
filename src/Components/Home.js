import "./Home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
require("dotenv").config();

const Home = () => {
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [clickVideo, setClickVideo] = useState("");
  const [hasClicked, setHasClicked] = useState(false);

  const fetchVideos = async () => {
    try {
<<<<<<< HEAD
      const newInput = input || " ";
=======
      const newInput = input || "Reactjs";
>>>>>>> 1cc6a5c91e16f8d84f72b59104b31859b11e6f69
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${newInput}&part=snippet&maxResults=6&key=${process.env.REACT_APP_API_KEY}`
      );
      setVideos(res.data.items);
    } catch (error) {
      console.log(error);
      setVideos([]);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = () => {
    setHasClicked(true);
  };

  useEffect(() => {
    if (localStorage.getItem("input")) {
      fetchVideos(localStorage.getItem("input"));
      setHasSearched(true);
    }
    fetchVideos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    fetchVideos();
    localStorage.setItem("input", input);

    setInput("");
  };

  const showVideo = (e) => {
    setClickVideo(e.target.title);
  };

  return (
    <div className="Home">
      {hasClicked ? "" : <h2>Search for some videos</h2>}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="search for a video"
          value={input}
        ></input>
        <button onClick={handleClick} type="submit">
          Search
        </button>
      </form>
      {hasSearched ? (
        <section id="videos-container">
          {videos.map((item) => {
            return (
              <p
                onClick={showVideo}
                key={item.id.videoId}
                className="singleVideo"
              >
                <Link to={`/Videos/${item.id.videoId}`} className="video">
                  <img
                    className="videoImg"
                    src={item.snippet.thumbnails.default.url}
                    title={item.id.videoId}
                    alt={item.snippet.title}
                  />
                  <p id="videoTitle">{item.snippet.title}</p>
                </Link>
              </p>
            );
          })}
        </section>
      ) : (
        <h2>No Videos</h2>
      )}
    </div>
  );
};

export default Home;
