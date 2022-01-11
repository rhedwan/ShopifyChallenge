import { useState } from "react";
import React from "react";
import { newData } from "./App";

const Data = ({ hdurl, date, explanation, title, url }) => {
  const [isLiked, setIsLiked] = useState([]);
  let likedItems;
  const addItem = (id) => {
    
    const newValue = newData.filter((data) => data.url === id);
    console.log(id);
    console.log(newValue);
  };
  return (
    <article className="single-tour">
      <img src={hdurl} alt={title} />
      <footer>
        <div className="tour-info">
          <h4>{title}</h4>
          <h4>{date}</h4>
        </div>
        <p>{explanation}</p>
        <button className="btn" onClick={() => addItem(url)}>
          Liked
        </button>
      </footer>
    </article>
  );
};
export default Data;
