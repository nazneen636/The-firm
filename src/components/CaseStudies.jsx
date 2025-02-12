import React from "react";
import Container from "../commonComponents/Container";
import Heading from "../commonComponents/Heading";
import Para from "../commonComponents/Para";
import Btn from "../commonComponents/Btn";
import case1 from "../assets/case1.png";
import case2 from "../assets/case2.png";
import circle from "../assets/circleCase.png";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const sliderItem = [
  {
    id: 1,
    img: case1,
  },
  {
    id: 2,
    img: case2,
  },
  {
    id: 3,
    img: case1,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`w-[46px] h-[38px] bg-yellow rounded-r-full border border-white absolute left-[2%] top-[10%] border-l-0`}
      style={{
        ...style,
        display: "block",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-xl text-black" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`w-[46px] h-[38px] bg-yellow rounded-l-full border border-white absolute left-[-7%] top-[10%] opacity-40 z-50`}
      style={{
        ...style,
        display: "block",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-xl text-black" />
    </div>
  );
}
const CaseStudies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="py-[100px]">
      <Container>
        <div className=" flex flex-col items-center justify-center">
          <Heading title="Our Research & Case Studies" />
          <Para
            className="text-center w-[864px] mt-7 mb-[50px]"
            paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`}
          />
        </div>
        <div className="flex justify-between relative z-100">
          <div className="left w-1/2">
            <h1 className="font-nunito text-[30px] font-bold tracking-wider">
              Lorem Ipsum is simply
            </h1>
            <Para
              className="w-[547px] mt-3 mb-8"
              paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.`}
            />
            <Btn btnText={"Read More"} />
          </div>
          <div className="right w-[471px] h-[417px] shadow-2xl rounded-[25px]">
            <img
              src={circle}
              alt={circle}
              className="absolute bottom-[-56px] right-[390px] -z-20"
            />
            <Slider {...settings}>
              {sliderItem?.map((item) => (
                <div className="w-full h-full">
                  <div
                    key={item.id}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <picture>
                      <img
                        className="w-[471px] h-[417px] border-10 rounded-[25px] border-white object-cover"
                        src={item.img}
                        alt={item.img}
                      />
                    </picture>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudies;
