import React from "react";
import Btn from "./Btn";

const Card = ({ cardData }) => {
  console.log(cardData);

  return (
    <div>
      <div className="min-h-[580px] rounded-2xl w-72 px-2 py-3 shadow-2xl   drop-shadow-2xl">
        <div className="h-[240px]">
          <picture>
            <img
              className="w-full h-full rounded-2xl border-4 border-[#f9f9f9]"
              src={cardData?.image || "image nai"}
              alt={cardData?.image || "image nai"}
            />
          </picture>
        </div>
        <div className="text px-2">
          <h1 className="text-2xl font-bold mt-3">
            {cardData?.title || "Title nai"}
          </h1>
          <p className="text-base opacity-75 text-justify my-3 ">
            {cardData?.description || "Content nai"}
          </p>
        </div>
        <div className="flex items-center justify-center my-2">
          <Btn
            fancyStyle={cardData?.fancyButton}
            btnText="Know More"
            className="!bg-black hover:!bg-yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
