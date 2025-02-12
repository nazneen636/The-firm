import React from "react";
import Para from "../commonComponents/Para";
import Container from "../commonComponents/Container";
import journey1 from "../assets/journey1.png";
import journey2 from "../assets/journey2.png";
import Contact from "../components/Contact";

const About = () => {
  return (
    <div>
      <div className=" bg-[#F5F6F7] py-10">
        <Container className="h-full">
          <div className="flex justify-between gap-8 items-center">
            <div className="textPart flex flex-col justify-center h-full">
              <h1 className="font-nunito text-nowrap font-black leading-[133%] text-[52px] text-black">
                Our Digital Journey
              </h1>
              <Para
                className="w-[437px] mt-7"
                paraText={`Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been
the industry's standard dummy.`}
              />
            </div>
            <div className=" -mr-32">
              <img className="" src={journey1} alt={journey1} />
            </div>
          </div>
        </Container>
      </div>
      {/* ===============section 2 */}
      <div className="py-[100px]">
        <Container>
          <div className="flex gap-[52px] items-center relative z-100">
            <div className="right rounded-[25px]">
              <picture>
                <img
                  className="w-[600px] rounded-[25px]"
                  src={journey2}
                  alt=""
                />
              </picture>
            </div>
            <div className="left w-1/2">
              <h1 className="font-nunito text-[30px] font-bold tracking-wider">
                SEO
              </h1>
              <Para
                className="w-[547px] mt-3 mb-8"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.`}
              />
              <Para
                className="w-[547px] mt-1"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum is simply dummy text of the printing.`}
              />
            </div>
          </div>
        </Container>
      </div>
      {/* ===============section 2 */}
      <Contact />
    </div>
  );
};

export default About;
