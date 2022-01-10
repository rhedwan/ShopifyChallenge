import React from "react";

const Data = ({ date, explanation }) => {
  return (
    <article className="single-tour">
      <footer>
        <div className="tour-info">
          <h4>{date}</h4>
        </div>
        <p>{explanation}</p>
        <button className="btn">Liked</button>
      </footer>
    </article>
  );
};
export default Data;
