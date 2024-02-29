import React from "react";
import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const AboutIntro = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div
      className="w-full bg-cover bg-top bg-gradient-to-r from-slate-950 to-transparent"
      style={{
        objectPosition: "top",
        backgroundImage:
          'url("https://images.pexels.com/photos/10347150/pexels-photo-10347150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="grid grid-cols-2 bg-gradient-to-r from-black to-transparent">
        <div className="w-full h-[100dvh] flex flex-col px-12 gap-4 justify-center items-end">
          <h1 className="text-xl font-semibold text-yellow-500">
            About{" "}
            <span classname="font-light text-white">
              Recruitment Agency Inc.
            </span>
          </h1>
          <h3 className="text-5xl font-extralight text-white">
            Where It All Began
          </h3>
          <p className="text-lg font-light text-white text-right">
            We are a team of professionals who are dedicated to providing the
            best services to our clients. We have been in the business for more
            than <sspan className="font-bold">10 years</sspan> and have served
            thousands of clients. We have a team of experienced professionals
            who are dedicated to providing the best services to our clients. We
            have been in the business for more than 10 years and have served
            thousands of clients.
          </p>
          <button
            onMouseEnter={handleHover} 
            onMouseLeave={handleHover} 
            className="py-2 px-8 font-semibold rounded cursor-pointer bg-yellow-400 group hover:text-white hover:bg-black relative flex flex-row gap-2 transition-all ease-in-out"
          >
            Request Talent
            {isHover && (
              <BsBoxArrowUpRight className="text-xl font-bold absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 " />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
