import React from "react";
import Container from "../commonComponents/Container";
import Heading from "../commonComponents/Heading";
import testimonial from "../assets/testimonial.png";
import Para from "../commonComponents/Para";
import Slider from "react-slick";

const Testimonial = ({ className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`py-[118px] bg-offWhite2 ${className}`}>
      <Container>
        <Heading className="text-center mb-[50px]" title="Our Testimonials" />

        <Slider {...settings}>
          <div className="">
            <div className="flex items-center justify-center mb-8">
              <picture>
                <img src={testimonial} alt={testimonial} />
              </picture>
            </div>
            <div className="flex flex-col gap-y-7 items-center justify-center">
              <Para
                className="text-center max-w-[864px]"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,`}
              />
              <h3 className="font-nunito font-bold text-2xl text-black">
                Jenny Wilson |{" "}
                <span className="font-lora text-[17px] font-normal">
                  Digital Agency
                </span>
              </h3>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-center mb-8">
              <picture>
                <img src={testimonial} alt={testimonial} />
              </picture>
            </div>
            <div className="flex flex-col gap-y-7 items-center justify-center">
              <Para
                className="text-center max-w-[864px]"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,`}
              />
              <h3 className="font-nunito font-bold text-2xl text-black">
                Jenny Wilson |{" "}
                <span className="font-lora text-[17px] font-normal">
                  Digital Agency
                </span>
              </h3>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-center mb-8">
              <picture>
                <img src={testimonial} alt={testimonial} />
              </picture>
            </div>
            <div className="flex flex-col gap-y-7 items-center justify-center">
              <Para
                className="text-center max-w-[864px]"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,`}
              />
              <h3 className="font-nunito font-bold text-2xl text-black">
                Jenny Wilson |{" "}
                <span className="font-lora text-[17px] font-normal">
                  Digital Agency
                </span>
              </h3>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
