import React from "react";
import Container from "../commonComponents/Container";
import Heading from "../commonComponents/Heading";
import Para from "../commonComponents/Para";
import { FaQuestion } from "react-icons/fa6";
import frustration from "../assets/frustration.png";

const questions = [
  {
    id: 1,
    text: "Loren rasion gravida auem is bibenua tase",
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the.",
  },
  {
    id: 3,
    text: "Printing and typesetting industry. Lorem Ipsum",
  },
  {
    id: 4,
    text: "When an unknown printer took a galley of type and scrambled it",
  },
];

const Frustration = () => {
  return (
    <div className="py-[100px] bg-offWhite">
      <Container className="flex items-center ">
        <div className="left w-1/2">
          <Heading title={"Frustration of Clients"} />
          <Para
            className="my-[22px]"
            paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`}
          />
          {questions?.map((item) => (
            <div key={item.id} className="flex items-baseline gap-[10px] ml-7">
              <FaQuestion className="text-yellow" />
              <Para paraText={item.text} />
            </div>
          ))}
        </div>
        <div className="right">
          <picture>
            <img src={frustration} alt="clients" />
          </picture>
        </div>
      </Container>
    </div>
  );
};

export default Frustration;
