import React from "react";
import Heading from "../commonComponents/Heading";
import Container from "../commonComponents/Container";
import Slider from "react-slick";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import firefox from "../assets/firefox.png";
import safari from "../assets/safari.png";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const partnerItem = [
  {
    id: 1,
    img: microsoft,
  },
  {
    id: 2,
    img: google,
  },
  {
    id: 3,
    img: firefox,
  },
  {
    id: 4,
    img: safari,
  },
  {
    id: 5,
    img: microsoft,
  },
  {
    id: 6,
    img: google,
  },
  {
    id: 7,
    img: firefox,
  },
  {
    id: 8,
    img: safari,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`w-[50px] h-[50px] rounded-full bg-offWhite absolute right-[-3%] top-[50%] -translate-y-[50%]`}
      style={{
        ...style,
        display: "block",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`w-[50px] h-[50px] rounded-full bg-offWhite absolute left-[-8%] top-[50%] -translate-y-[50%]`}
      style={{
        ...style,
        display: "block",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}
const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Container className="py-[100px]">
        <div className="mb-[50px]">
          <Heading title="Our Partner" />
        </div>
        <Slider {...settings}>
          {partnerItem?.map((item) => (
            <div key={item.id} className="">
              <div className="w-[240px] h-[120px] rounded-[20px] bg-offWhite flex items-center justify-center">
                <picture>
                  <img className="" src={item.img} alt={item.img} />
                </picture>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Partner;
