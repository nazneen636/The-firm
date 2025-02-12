import React from "react";
import Heading from "../commonComponents/Heading";
import Para from "../commonComponents/Para";
import { Link } from "react-router";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import Container from "../commonComponents/Container";
import CaseCard from "../commonComponents/CaseCard";
import caseCard1 from "../assets/caseCard1.png";
import caseCard2 from "../assets/caseCard2.png";
import caseCard3 from "../assets/caseCard3.png";
import caseCard4 from "../assets/caseCard4.png";
import caseCard5 from "../assets/caseCard5.png";
import caseCard6 from "../assets/caseCard6.png";
import caseCard7 from "../assets/caseCard7.png";
import caseCard8 from "../assets/caseCard8.png";
import caseCard9 from "../assets/caseCard9.png";
import Btn from "../commonComponents/Btn";
const reasons = [
  {
    id: 1,
    name: "Show All",
  },
  {
    id: 2,
    name: "Coaching",
  },
  {
    id: 3,
    name: "Digital Partners",
  },
  {
    id: 4,
    name: "SEO",
  },
];
const casesItem = [
  {
    id: 1,
    img: caseCard1,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 2,
    img: caseCard2,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 3,
    img: caseCard3,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 4,
    img: caseCard4,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 5,
    img: caseCard5,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 6,
    img: caseCard6,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 7,
    img: caseCard7,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 8,
    img: caseCard8,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 9,
    img: caseCard9,
    title: "Lorem Ipsum is ",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
];
const CasesCategory = () => {
  return (
    <div className="pb-[100px]">
      <Container className="">
        <div className="flex flex-col items-center justify-center mb-[63px]">
          <Heading className="pt-[100px] pb-[56px]" title="Our Cases" />
          <div className="flex justify-between items-center w-full">
            <ul className="flex gap-x-14">
              {reasons?.map((item) => (
                <li
                  key={item.id}
                  className="w-44 py-3 text-center cursor-pointer bg-white z-100 hover:bg-yellow duration-300 transition-all border border-offWhite rounded-[5px] relative after:absolute after:w-5 after:h-5 after:rounded-full after:bg-offWhite2 after:left-[-20%] after:top-[50%] after:translate-y-[-50%] before:absolute before:w-[38px] before:h-[1px] before:bg-offWhite2 before:left-[-20%] before:top-[50%] before:translate-y-[-50%] hover:after:bg-yellow hover:before:bg-yellow after:duration-300 after:transition-all before:duration-300 before:transition-all before:-z-10 after:-z-10 group"
                >
                  <Link
                    to="/"
                    className="font-nunito font-bold text-[18px] text-gray group-hover:text-white duration-300 transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex  border-b border-b-[#C4C4C4] px-4 py-3">
              <input
                type="search"
                placeholder="Search"
                className="w-[200px] border-none outline-none bg-transparent placeholder:font-bold placeholder:font-nunito placeholder:text-[18px] font-bold font-nunito text-[18px]"
              />
              <HiMiniMagnifyingGlass className="text-xl" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-y-[60px]">
          {casesItem?.map((item) => (
            <CaseCard
              key={item.id}
              blogTitle={item.title}
              blogContent={item.para}
              blogImg={item.img}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Btn btnText="Load More" className="mt-[52px]" />
        </div>
      </Container>
    </div>
  );
};

export default CasesCategory;
