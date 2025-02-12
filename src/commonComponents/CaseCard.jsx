import React from "react";
import { Link } from "react-router";

const CaseCard = ({ blogImg, blogTitle, blogContent }) => {
  return (
    <div className="w-[340px] bg-white rounded-[15px] flex flex-col gap-y-6 cardShadow drop-shadow-2xl">
      <div className="">
        <picture>
          <img className="rounded-[15px]" src={blogImg} alt={blogImg} />
        </picture>
      </div>
      <div className="content px-5">
        <h2 className="font-nunito font-bold text-2xl">{blogTitle}</h2>
        <p className="text-[17px] mt-[10px] font-lora font-normal leading-[176%] text-justify pb-[20px] border-b border-b-offWhite2">
          {blogContent}
        </p>
      </div>
      <Link
        to="/casedetails"
        className="py-[10px] px-5 w-fit text-nowrap rounded-[5px] text-[18px] font-bold font-nunito text-white hover:bg-yellow bg-black duration-300 transition-all cursor-pointer mb-6 mx-auto"
      >
        Read More
      </Link>
    </div>
  );
};

export default CaseCard;
