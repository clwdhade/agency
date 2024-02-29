import React from "react";
import AboutIntro from "./Sections/AboutIntro";
import Background from "./Sections/Background";

const About = () => {
  return (
    <div>
      <AboutIntro />
      <div className="mx-8">
        <Background />
      </div>
    </div>
  );
};

export default About;
