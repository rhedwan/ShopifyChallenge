import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Data = ({ hdurl, date, explanation, title }) => {
  const [like, setLike] = React.useState(true);
  const [readMore, setReadMore] = React.useState(false);
  const styling = {
    like: {
      color: "green",
      border: "1px solid green",
    },
    unlike: {
      color: "red",
      border: "1px solid red",
    },
  };
  return (
    <article className="single-tour">
      <img src={hdurl} alt={title} />
      <footer>
        <div className="tour-info">
          <h4>{title}</h4>
          <h4>{date}</h4>
        </div>
        <p>
          {readMore ? `${explanation}` : `${explanation.substring(0, 250)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `Read Less` : `Read More`}
          </button>
        </p>
        <button
          className={"like-btn"}
          style={like ? styling.like : styling.unlike}
          onClick={() => setLike(!like)}
        >
          {like ? "Like  " : "UnLike  "}
          {like ? <FaThumbsUp /> : <FaThumbsDown/>}
        </button>
      </footer>
    </article>
  );
};
export default Data;
