import React from "react";

const Data = ({ hdurl, date, explanation, title }) => {
  return (
    <article className="single-tour">
      <img src={hdurl} alt={title} />
      <footer>
        <div className="tour-info">
          <h4>{title}</h4>
          <h4>{date}</h4>
        </div>
        <p>{explanation}</p>
        <button className="btn">Liked</button>
      </footer>
    </article>
  );
};
export default Data;
