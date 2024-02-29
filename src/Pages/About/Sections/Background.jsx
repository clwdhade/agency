import React from "react";

const Background = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full md:p-24 py-8 px-4  md:gap-12">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-4  md:items-end">
          <h2 className="text-3xl font-extrabold text-yellow-500">
            Our <span className="font-light text-black">Vision</span>
          </h2>

          <p className="text-base md:text-right">
            Our vision is to help people find their dream job and to help
            companies find the perfect candidate. We believe that everyone
            deserves to be happy in their job and that companies deserve the
            best talent.
          </p>
        </div>

        <div className="flex flex-col gap-4  md:items-end">
          <h2 className="text-3xl font-extrabold text-yellow-500">
            Our <span className="font-light text-black">Mission</span>
          </h2>
          <p className="text-base md:text-right">
            Our mission is to provide the best recruitment service to both
            candidates and companies. We aim to provide a seamless experience
            for both parties and to make the recruitment process as easy as
            possible.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center md:p-24 py-8 px-2">
        <h2 className="text-3xl font-extrabold text-yellow-500">
          Our <span className="font-light text-black">Background</span>
        </h2>
        <p className="md:text-xl text-lg">
          We are a recruitment agency that has been in business for over <span className="font-bold">10
          years</span>. We have helped thousands of people find their dream job and
          hundreds of companies find the perfect candidate.
        </p>
      </div>
    </div>
  );
};

export default Background;
