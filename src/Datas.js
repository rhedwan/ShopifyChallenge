import React from "react";
import Data from "./Data";
import { FaRegHeart } from "react-icons/fa";

const Datas = ({ datas }) => {
  return (
    <section>
      <div className="title">
        <h2>Our API Response</h2>
        <div className="underline"></div>
      </div>
      <FaRegHeart />
      <div>
        {datas.map((data, index) => {
          return <Data key={index} {...data} />;
        })}
      </div>
    </section>
  );
};
export default Datas;
