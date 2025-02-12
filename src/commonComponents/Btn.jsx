import React from "react";

const Btn = ({ btnText, className, fancyStyle }) => {
  return (
    <button className={fancyStyle ? "dotStyle" : "normalStyle"}>
      {btnText || "Missing"}
    </button>
  );
};

export default Btn;
