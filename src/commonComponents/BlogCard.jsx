import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import Btn from "./Btn";

const BlogCard = ({
  cardItemData,
  blogImg,
  blogTitle,
  blogContent,
  clientImg,
  clientName,
  blogDate,
}) => {
  console.log(cardItemData);

  return (
    <div className="w-[340px] bg-white rounded-[15px] flex flex-col gap-y-6 shadow shadow-[#facb1076]">
      <div className="">
        <picture>
          <img
            className="rounded-[15px]"
            src={
              cardItemData?.img ||
              "https://images.unsplash.com/photo-1738193026612-4a953a4f4e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            }
            alt={cardItemData?.img}
          />
        </picture>
      </div>
      <div className="content px-5">
        <h2 className="font-nunito font-bold text-2xl">
          {cardItemData?.title || "Title missing"}
        </h2>
        <p className="text-[17px] mt-[10px] font-lora font-normal leading-[176%] text-justify pb-[20px] border-b border-b-lightGray">
          {cardItemData?.para || "Content missing"}
        </p>
      </div>
      {/* client */}
      <div className="flex justify-between px-5">
        <div className="client flex items-center justify-center gap-x-2">
          <picture>
            <img src={cardItemData?.client} alt={cardItemData?.clientImg} />
          </picture>
          <span className="font-nunito text-base mb-1">
            {cardItemData?.clientName}
          </span>
        </div>
        <div className="flex items-center justify-center gap-[6px]">
          <MdOutlineWatchLater className="text-lightGray" />
          <span className="text-[10px] text-[#B0B0B0] font-nunito">
            {cardItemData?.date}
          </span>
        </div>
      </div>
      <button className="py-[10px] px-5 w-fit text-nowrap rounded-[5px] text-[18px] font-bold font-nunito text-white hover:bg-yellow bg-black duration-300 transition-all cursor-pointer mb-6 mx-auto">
        Read More
      </button>
      {/* client */}
    </div>
  );
};

export default BlogCard;
