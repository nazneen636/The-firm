import React from "react";
import map from "../assets/map.png";
import Heading from "../commonComponents/Heading";
import Btn from "../commonComponents/Btn";

const formItem = [
  {
    label: "Name",
    htmlFor: "name",
    placeholder: "Enter your Name",
  },
  {
    label: "Email",
    htmlFor: "email",
    placeholder: "Enter your Email",
  },
  {
    label: "Phone",
    htmlFor: "phone",
    placeholder: "Enter your Phone",
  },
  {
    label: "Subject",
    htmlFor: "subject",
    placeholder: "Enter your Subject",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="h-[756px] relative">
      <div className="bg-[url(./assets/map.png)] h-[396px]"></div>
      <div className="py-[60px] px-[80px] w-[938px] mx-auto bg-white rounded-[15px] shadow-2xl absolute left-[50%] -translate-x-[50%] top-[149px] ">
        <Heading className="text-center" title="Get in Touch" />
        {/* form */}
        <div className="form grid grid-cols-2 gap-x-[85px] gap-y-[53px] mt-[42px]">
          {formItem?.map((item) => (
            <div className="flex flex-col gap-1 border-b border-b-[#1e1e1e4a] pb-3">
              <label
                htmlFor={item.htmlFor}
                className="text-gray font-lora text-base leading-[133%] px-2"
              >
                {item.label}
                <span className="ml-2 text-red-600">*</span>
              </label>
              {item.htmlFor !== "subject" ? (
                <input
                  type={
                    item.htmlFor == "name"
                      ? "text"
                      : item.htmlFor == "email"
                      ? "email"
                      : item.htmlFor == "phone"
                      ? "number"
                      : "text"
                  }
                  name={item.htmlFor}
                  id={item.htmlFor}
                  placeholder={item.placeholder}
                  className="font-nunito focus:border-none focus:outline-none text-[18px] font-bold text-black placeholder:text-black placeholder:text-[18px] px-2"
                />
              ) : (
                <select
                  name="subject"
                  id="subject"
                  className="font-nunito focus:border-none focus:outline-none text-[18px] font-bold text-black placeholder:text-black placeholder:text-[18px] px-2"
                >
                  <option value="MERN">MERN</option>
                  <option value="Backend">Backend</option>
                  <option selected value="Web Development">
                    Web Development
                  </option>
                  <option value="FDR">FDR</option>
                </select>
              )}
            </div>
          ))}
        </div>
        <div className="w-full mt-[67px] flex items-center justify-center">
          <Btn className="px-[46px]" btnText="Submit" />
        </div>
        {/* form */}
      </div>
    </div>
  );
};

export default Contact;
