import React from "react";
import Container from "../commonComponents/Container";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import Btn from "../commonComponents/Btn";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const menuItem = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Solutions", link: "/" },
  { id: 3, name: "Cases", link: "/" },
  { id: 4, name: "About Us", link: "/" },
  { id: 5, name: "Blog", link: "/" },
  { id: 6, name: "Contact Us", link: "/" },
];
const iconItem = [
  { id: 1, icon: <FaFacebookF />, link: "/" },
  { id: 2, icon: <FaTwitter />, link: "/" },
  { id: 3, icon: <FaYoutube />, link: "/" },
  { id: 4, icon: <FaLinkedinIn />, link: "/" },
  { id: 5, icon: <FaPinterestP />, link: "/" },
];

const Footer = () => {
  return (
    <div className="mt-[80px]">
      <Container className="m-5 flex flex-col gap-[64px] justify-between items-center">
        {/* logo */}
        <Link>
          <picture>
            <img src={logo} alt="logo" />
          </picture>
        </Link>
        {/* logo */}

        {/* menu */}
        <ul className="flex gap-x-[43px] items-center">
          {menuItem?.map((item) => (
            <li className="" key={item.id}>
              <Link
                className="font-nunito text-[18px] text-nowrap font-bold text-black relative after:absolute after:bg-yellow after:w-0 after:h-1 after:top-[70%] after:left-[50%] after:-translate-x-1/2 after:z-[-1] hover:after:w-full after:duration-300 after:transition-all"
                to={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* menu */}

        {/* icons  */}
        <div className="icons flex items-center justify-center gap-11">
          {iconItem?.map((item) => (
            <Link
              key={item.id}
              className="text-black hover:text-yellow duration-300 transition-all text-xl"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        {/* icons  */}
        <p className="font-nunito text-xs tracking-[3px] text-[#A5A5A5]">
          Copyrights ©2020 Thefirm. All Right Reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
