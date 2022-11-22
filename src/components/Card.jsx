import React, { useDebugValue } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

export default function Card() {
  const [animeComplete, setAnimeComplete] = useState([]);
  const [animeOnGoing, setAnimeOnGoing] = useState([]);

  useEffect(() => {
    axios
      .get("https://otakudesu-api.herokuapp.com/api/home")
      .then((res) => setAnimeComplete(res.data.home.complete));
    axios
      .get("https://otakudesu-api.herokuapp.com/api/home")
      .then((res) => setAnimeOnGoing(res.data.home.on_going));
  }, []);

  console.log(animeComplete);

  return (
    <div className="card-container">
      <div className="card-list">
        {animeComplete.map((animeComplete) => (
          <div className="card-item">
            <div className="card-title">{animeComplete.title}</div>
            <div className="card-thumb">
              <img src={animeComplete.thumb} alt="" />
            </div>
            <div className="card-episode">{animeComplete.episode}</div>
          </div>
        ))}
        {animeOnGoing.map((animeOnGoing) => (
          <div className="card-item">
            <div className="card-title">{animeOnGoing.title}</div>
            <div className="card-thumb">
              <img src={animeOnGoing.thumb} alt="" />
            </div>
            <div className="card-episode">{animeOnGoing.episode}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
