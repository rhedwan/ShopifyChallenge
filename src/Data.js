import React from "react";

const Data = ({ hdurl, date, explanation, title }) => {
  const [like, setLike] = React.useState(true);

  return (
    <article className="single-tour">
      <img src={hdurl} alt={title} />
      <footer>
        <div className="tour-info">
          <h4>{title}</h4>
          <h4>{date}</h4>
        </div>
        <p>{explanation}</p>
        <button className="delete-btn" onClick={() => setLike(!like)}>
          {like ? "Liked" : "UnLiked"}
        </button>
      </footer>
    </article>
  );
};
export default Data;
