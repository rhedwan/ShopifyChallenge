import React from "react";
import Data from "./Data";

const Datas = ({ datas }) => {
  return (
    <section>
      <div className="title">
        <h2>Our API Response</h2>
        <div className="underline"></div>
      </div>
      <div>
        {datas.map((data,index) => {
          return <Data key={index} {...data} />;
        })}
      </div>
    </section>
  );
};
export default Datas;
