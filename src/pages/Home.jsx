import React from "react";
import HomeBanner from "../components/HomeBanner";
import Partner from "../components/Partner";
import Frustration from "../components/Frustration";
import Solution from "../components/Solution";
import Choose from "../components/Choose";
import CaseStudies from "../components/CaseStudies";
import Blogs from "../components/Blogs";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Partner />
      <Frustration />
      <Solution />
      <Choose />
      <CaseStudies />
      <Blogs />
      <Testimonial className="bg-white" />
      <Contact />
    </div>
  );
};

export default Home;
