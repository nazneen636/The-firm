import React from "react";
import Container from "../commonComponents/Container";
import banner from "../assets/banner.png";
import bannerElipse from "../assets/bannerElipse.png";
import Para from "../commonComponents/Para";
import Btn from "../commonComponents/Btn";
import cases from "../assets/case2.png";

const CasesBanner = () => {
  return (
    <div className="h-[650px] relative ">
      <div className="w-[852px] h-[650px] absolute right-[30px] top-0 z-[-1]">
        <img className="w-full h-full rounded-[37px]" src={cases} alt="" />
      </div>
      <Container className="h-full">
        <div className="textPart flex flex-col justify-center h-full">
          <h1 className="font-nunito font-black leading-[133%] text-[52px] text-black">
            <span className="block">Our Research &</span>
            <span className="relative">Case Studies</span>
          </h1>
          <Para
            className="w-[437px] mt-7"
            paraText={`Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been
the industry's standard dummy.`}
          />
          <Btn className="mt-8" btnText="Get in Touch" />
        </div>
      </Container>
    </div>
  );
};

export default CasesBanner;
