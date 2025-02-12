import React from "react";
import Container from "../commonComponents/Container";
import Heading from "../commonComponents/Heading";
import Para from "../commonComponents/Para";
import Btn from "../commonComponents/Btn";
import solution from "../assets/solution.png";

const Solution = () => {
  return (
    <div className="py-[100px]">
      <Container className="flex items-center justify-between">
        <div className="left w-1/2 -ml-8">
          <picture>
            <img src={solution} alt={solution} />
          </picture>
        </div>
        <div className="right w-[450px] flex flex-col gap-y-3">
          <Heading
            title="Perfect Solution for
            Your Bussiness"
          />
          <Para
            paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`}
          />
          <div className="mt-1">
            <Btn btnText="Read More" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solution;
