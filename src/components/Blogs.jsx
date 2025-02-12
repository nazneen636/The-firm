import React from "react";
import Container from "../commonComponents/Container";
import Heading from "../commonComponents/Heading";
import BlogCard from "../commonComponents/BlogCard";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import Btn from "../commonComponents/Btn";
import { data } from "react-router";

const blogItem = [
  {
    img: blog1,
    title: "Lorem Ipsum is",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    client: client1,
    clientName: "Alex Liones",
    date: "28,Aug 2020, 09:48:00",
  },
  {
    img: blog2,
    title: "Lorem Ipsum is",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    client: client2,
    clientName: "Alex Liones",
    date: "28,Aug 2020, 09:48:00",
  },
  {
    img: blog3,
    title: "Lorem Ipsum is",
    para: "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    client: client3,
    clientName: "Alex Liones",
    date: new Date().toLocaleTimeString(),
  },
];

const Blogs = () => {
  return (
    <div className="py-[82px] bg-offWhite">
      <Container>
        <Heading className="text-center mb-[70px]" title="Our Blogs" />
        <div className="grid grid-cols-3 ">
          {blogItem.map((item, index) => (
            <BlogCard
              cardItemData={{ ...item, id: index + 1 }}
              // key={item.id}
              // blogImg={item.img}
              // blogTitle={item.title}
              // blogContent={item.para}
              // clientImg={item.client}
              // clientName={item.clientName}
              // blogDate={item.date}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Btn className="mt-[34px]" btnText="View More" />
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
