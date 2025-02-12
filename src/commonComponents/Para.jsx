import React from "react";

const Para = ({ className, paraText }) => {
  return (
    <p
      className={`leading-[176%] text-[18px] font-normal font-lora tracking-normal ${className}`}
    >
      {paraText}
    </p>
  );
};

export default Para;
