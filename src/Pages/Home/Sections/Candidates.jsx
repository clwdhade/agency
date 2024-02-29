import React from "react";
import { BsUpload } from "react-icons/bs";

const Candidates = () => {
  return (
    <div className="w-full  relative">
      <div className="w-full md:w-3/4 py-12  md:-m-12 h-[70dvh] md:h-[71.5vh] relative z-10 bg-slate-800 rounded"></div>
      <div className="candidates flex w-full flex-col md:flex-row items-center md:gap-8 gap-0 absolute z-20 top-0 text-white ">
        <div className="content w-full px-8 py-16 md:w-1/2 flex flex-col gap-4 items-start md:items-end justify-center">
          <h3 className="font-bold text-sm text-slate-300 absolute z-50 top-4 md:left-8 left-4 py-1 px-6 rounded w-3/4 md:w-max bg-slate-700 flex flex-row items-center gap-2 justify-center">
            {" "}
            <span className="text-xl text-green-400 animate-ping transition-all ease-in-out">
              &#x2022;
            </span>
            FOR CANDIDATES
          </h3>
          <h3 className=" text-2xl md:text-3xl text-yellow-500 font-semibold">
            Smash the Glass Ceiling
          </h3>
          <p className="text-base md:text-end w-full md:w-3/4">
            Agency Recruiting Inc. does not work with just anyone. We’re looking
            for mavericks that are going to slay their new position and keep
            rising in the ranks. Why? We have a very high success rate and we
            definitely attribute it to picking our unicorns in a sea of
            mediocrity.
          </p>
          <hr className="h-[2px] bg-yellow-400 border-none outline-none md:w-1/2 w-full rounded flex self-center md:self-end" />
          <button className="rounded py-2  text-white text-base font-semibold w-full md:w-[35%] border hover:bg-yellow-700 hover:border-yellow-400 transition-all ease-in-out flex flex-row gap-4 justify-center items-center hover:scale-110">
            Upload Your Resume <BsUpload className="font-2xl font-black" />{" "}
          </button>
        </div>
        <div className="md:w-1/2 w-3/4">
          <img
            src="https://images.pexels.com/photos/7944171/pexels-photo-7944171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            title="Recent Graduands"
            className="rounded brightness-75 hover:brightness-100 transition-all ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Candidates;
