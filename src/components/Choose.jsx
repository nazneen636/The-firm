import React from "react";
import Container from "../commonComponents/Container";
import Heading from "../commonComponents/Heading";
import Para from "../commonComponents/Para";
import { Link } from "react-router";
import brand from "../assets/brand.png";
import Btn from "../commonComponents/Btn";
import { GrAnnounce } from "react-icons/gr";
const reasons = [
  {
    id: 1,
    name: "Market Research",
  },
  {
    id: 2,
    name: "Branding",
  },
  {
    id: 3,
    name: "Reporting",
  },
  {
    id: 4,
    name: "Data Analysis",
  },
];
const Choose = () => {
  return (
    <div className="bg-offWhite2 py-[96px]">
      <Container>
        <div className=" flex flex-col items-center justify-center">
          <Heading title="Reason to Choose Us" />
          <Para
            className="text-center w-[864px] mt-7 mb-[50px]"
            paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`}
          />
          <ul className="flex gap-x-12">
            {reasons?.map((item) => (
              <li
                key={item.id}
                className="py-3 px-8 cursor-pointer bg-white hover:bg-yellow duration-300 transition-all border border-offWhite rounded-[5px] relative after:absolute after:w-0 after:h-0 after:rounded-full after:bg-yellow after:left-[-20%] after:top-[50%] after:translate-y-[-50%] before:absolute before:w-0 before:h-0 before:bg-yellow before:left-[-20%] before:top-[50%] before:translate-y-[-50%] hover:after:w-5 hover:after:h-5 hover:before:w-10 hover:before:h-[1px] after:duration-300 after:transition-all before:duration-300 before:transition-all group"
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
        </div>
        {/* brand */}
        <div className="brand bg-white rounded-[30px] py-[67px] px-10 mt-[60px] flex gap-x-[139px]">
          <div className="left">
            <picture>
              <img src={brand} alt={brand} />
            </picture>
          </div>
          <div className="right">
            <h1 className="relative after:absolute after:bg-yellow after:w-[126px] after:h-1 after:top-[70%] after:left-0 font-nunito font-bold text-[30px] ">
              <span className="relative z-10">Branding</span>
              <div className="bg-yellow w-[56px] h-[56px] rounded-full flex items-center justify-center text-white absolute left-[-80px] top-0">
                <GrAnnounce />
              </div>
            </h1>
            <Para
              className="w-[505px] mt-4 mb-10"
              paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type`}
            />
            <Btn btnText="Read More" />
          </div>
        </div>
        {/* brand */}
      </Container>
    </div>
  );
};

export default Choose;
