import React from "react";
import Container from "../commonComponents/Container";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import Btn from "../commonComponents/Btn";
const menuItem = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Solutions", link: "/solution" },
  { id: 3, name: "Cases", link: "/cases" },
  { id: 4, name: "About Us", link: "/about" },
  { id: 5, name: "Blog", link: "/blog" },
  { id: 6, name: "Contact Us", link: "/" },
];

const Header = () => {
  return (
    <div>
      <Container className="m-5 flex justify-between items-center">
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
          <li>
            <Btn btnText="Get in Touch" />
          </li>
        </ul>
        {/* menu */}
      </Container>
    </div>
  );
};

export default Header;
