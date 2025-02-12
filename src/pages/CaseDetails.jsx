import React from "react";
import Container from "../commonComponents/Container";
import caseDetail1 from "../assets/caseDetail1.png";
import caseDetail2 from "../assets/caseDetail2.png";
import circle from "../assets/circleCase.png";
import Para from "../commonComponents/Para";
import Btn from "../commonComponents/Btn";
import { FaQuestion } from "react-icons/fa6";
import Heading from "../commonComponents/Heading";
const questions = [
  {
    id: 1,
    text: "Loren rasion gravida auem is bibenua tase. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content ",
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
  },
  {
    id: 3,
    text: "Printing and typesetting industry. Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs.",
  },
  {
    id: 4,
    text: "When an unknown printer took a galley of type and scrambled it",
  },
];

const CaseDetails = () => {
  return (
    <div className="">
      <div className="bg-offWhite2 py-[98px]">
        <Container>
          {/* banner==== */}
          <div className="flex justify-between relative z-100">
            <div className="left w-1/2">
              <h1 className="font-nunito text-[30px] font-bold tracking-wider">
                Lorem Ipsum
              </h1>
              <Para
                className="w-[547px] mt-3 mb-8"
                paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}
              />
              <div className="flex gap-5">
                <Btn btnText={"Digital Partners"} />
                <Btn btnText={"Coaching"} />
              </div>
            </div>
            <div className="right rounded-[25px]">
              <img
                src={circle}
                alt={circle}
                className="absolute bottom-[0] right-[497px] -z-20"
              />
              <picture>
                <img
                  className="w-[600px] rounded-[25px]"
                  src={caseDetail1}
                  alt=""
                />
              </picture>
            </div>
          </div>
          {/* banner==== */}
        </Container>
      </div>
      {/* ====================section 2 */}
      <Container>
        <div className="flex items-center gap-5 relative z-100 py-[100px]">
          <div className="left w-1/2 -ml-5">
            <picture>
              <img className=" rounded-[25px]" src={caseDetail2} alt="" />
            </picture>
          </div>
          <div className="right w-1/2">
            <h1 className="font-nunito text-[30px] font-bold tracking-wider">
              Lorem Ipsum
            </h1>
            <Para
              className="w-[620px] mt-3 mb-8"
              paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
            />
          </div>
        </div>
      </Container>
      {/* ====================section 2 */}

      {/* ====================section 3 */}
      <div className="bg-offWhite2 py-[85px]">
        <Container>
          <div className="left">
            <h1 className="font-nunito text-[30px] font-bold tracking-wider">
              Lorem Ipsum
            </h1>
            <Para
              className="my-[22px]"
              paraText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
            />
            <ul className="flex flex-col gap-3">
              {questions?.map((item) => (
                <div key={item.id} className="flex items-baseline gap-[10px] ">
                  <FaQuestion className="text-yellow" />
                  <Para paraText={item.text} />
                </div>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      {/* ====================section 3 */}
    </div>
  );
};

export default CaseDetails;
