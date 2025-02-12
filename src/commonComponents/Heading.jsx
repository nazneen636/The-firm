import React from "react";

const Heading = ({ title = "Missing", className }) => {
  const titleArray = title?.split(" ");
  const titleLastItem = titleArray[titleArray.length - 1];
  const titleFirstItem = title?.replace(titleLastItem, "");

  console.log(titleLastItem);

  return (
    <h1
      className={`font-nunito font-black text-[44px] leading-[133%] ${className}`}
    >
      {titleFirstItem ? titleFirstItem : "Missing First Item"}
      <span className="relative after:absolute after:bg-yellow after:w-full after:h-1 after:top-[72%] after:left-[50%] after:-translate-x-1/2 after:z-[-1] ">
        {titleLastItem || "nei"}
      </span>
    </h1>
  );
};

export default Heading;

// import React from "react";

// const Heading = ({ title = "Missing" }) => {
//   const titleArray = title?.split(" ");
//   const titleLast = titleArray[titleArray.length - 1];
//   const titleFirst = title?.replace(titleLast, "");

//   return (
//     <h1 className="font-nunito font-black text-[44px] text-black_color">
//       {titleFirst ? titleFirst : "Missing First Item"}
//       <span className="navitemstyle2 inline-block cursor-pointer">
//         {titleLast || "nei"}
//       </span>
//     </h1>
//   );
// };

// export default Heading;
