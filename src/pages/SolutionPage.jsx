import React from "react";
import Container from "../commonComponents/Container";
import Solution from "../components/Solution";
import solution1 from "../assets/solution1.png";
import solution2 from "../assets/solution2.png";
import solution3 from "../assets/solution3.png";
import CaseCard from "../commonComponents/CaseCard";
import Para from "../commonComponents/Para";
import circle from "../assets/circleCase.png";
import solution4 from "../assets/solution4.png";
import solution5 from "../assets/solution5.png";
import solution6 from "../assets/solution6.png";
import Testimonial from "../components/Testimonial";
const solutionItem = [
  {
    id: 1,
    img: solution1,
    title: "Coaching",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 2,
    img: solution2,
    title: "Coaching",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
  {
    id: 3,
    img: solution3,
    title: "Coaching",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. ",
  },
];

const SolutionPage = () => {
  return (
    <div>
      {/* section-1== */}
      <div className="">
        <Container className="">
          <Solution />
        </Container>
      </div>
      {/* section-1== */}

      {/* section-2== */}
      <div className="bg-offWhite2 py-20">
        <Container>
          <div className="grid grid-cols-3">
            {solutionItem?.map((item) => (
              <CaseCard
                key={item.id}
                blogContent={item.para}
                blogImg={item.img}
                blogTitle={item.title}
              />
            ))}
          </div>
        </Container>
      </div>
      {/* section-2== */}

      {/* section-3== */}
      {/* 1st */}
      <div className="py-[100px]">
        <Container className="flex flex-col gap-[48px]">
          <div className="flex justify-between items-center relative z-100">
            <div className="left w-1/2">
              <h1 className="font-nunito text-[30px] font-bold tracking-wider">
                Coaching
              </h1>
              <Para
                className="w-[547px] mt-3 mb-8"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.`}
              />
            </div>
            <div className="right rounded-[25px]">
              <img
                src={circle}
                alt={circle}
                className="absolute bottom-[-34px] right-[497px] -z-20"
              />
              <picture>
                <img
                  className="w-[600px] rounded-[25px]"
                  src={solution4}
                  alt=""
                />
              </picture>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex justify-between items-center relative z-100">
            <div className="right rounded-[25px]">
              <img
                src={circle}
                alt={circle}
                className="absolute bottom-[-34px] left-[-50px] -z-20 "
              />
              <picture>
                <img
                  className="w-[600px] rounded-[25px] -ml-5"
                  src={solution5}
                  alt=""
                />
              </picture>
            </div>
            <div className="left w-1/2">
              <h1 className="font-nunito text-[30px] font-bold tracking-wider">
                Digital Partner
              </h1>
              <Para
                className="w-[547px] mt-3 mb-8"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.`}
              />
            </div>
          </div>
          {/* 3rd */}
          <div className="flex justify-between items-center relative z-100">
            <div className="left w-1/2">
              <h1 className="font-nunito text-[30px] font-bold tracking-wider">
                SEO
              </h1>
              <Para
                className="w-[547px] mt-3 mb-8"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.`}
              />
            </div>
            <div className="right rounded-[25px]">
              <img
                src={circle}
                alt={circle}
                className="absolute bottom-[-56px] right-[523px] -z-20"
              />
              <picture>
                <img
                  className="w-[600px] rounded-[25px]"
                  src={solution6}
                  alt=""
                />
              </picture>
            </div>
          </div>
        </Container>
      </div>

      {/* section-3== */}

      {/* section-4== */}
      <Testimonial />
      {/* section-4== */}
    </div>
  );
};

export default SolutionPage;
