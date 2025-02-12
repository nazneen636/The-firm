import React from "react";
import Card from "../commonComponents/Card";
import Container from "../commonComponents/Container";

const cardItem = [
  {
    image:
      "https://images.unsplash.com/photo-1738395548716-522475b89043?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat dolor odit ipsum architecto sequi praesentium assumenda voluptatibus aut velit deserunt modi, enim tempore incidunt et. Fuga beatae earum voluptas.",
    fancyButton: true,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1681223965500-6f7d7c96973e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    title: "Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat dolor odit ipsum architecto sequi praesentium assumenda voluptatibus aut velit deserunt modi, enim tempore incidunt et. Fuga beatae earum voluptas.",
    fancyButton: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1738898178964-88696087d43b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat dolor odit ipsum architecto sequi praesentium assumenda voluptatibus aut velit deserunt modi, enim tempore incidunt et. ",
    fancyButton: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1738707060473-a23914a02d8a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat dolor ot modi, enim tempore incidunt et. Fuga beatae earum voluptas.",
    fancyButton: false,
  },
];

const BlogPage = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-4">
          {cardItem?.map((item, index) => (
            <Card cardData={{ ...item, id: index + 1 }} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
