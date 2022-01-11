import { useState } from "react";
import React from "react";

const Data = ({ hdurl, date, explanation, title, url }) => {
  const [isLiked, setIsLiked] = useState([]);
  let likedItems;
  const addItem = (id) => {
    
    console.log(id);
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
