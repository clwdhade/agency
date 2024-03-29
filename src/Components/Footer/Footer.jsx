import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMedium,
  FaReddit,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" flex w-full flex-col px-12 py-8 bg-slate-800 text-white">
      <div className="content w-full my-4 flex md:flex-row flex-col md:gap-4 gap-8">
        <div className="about flex flex-col gap-4 w-full md:w-3/12">
          <h2 className="text-xl font-bold text-white">
            <span className="text-yellow-500">R</span>ecruitment{" "}
            <span className="font-light text-white">Agency Inc.</span>
          </h2>
          <p className="text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
            temporibus distinctio repellendus. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.{" "}
          </p>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <FaWhatsapp className="text-lg md:text-2xl hover:text-green-500 cursor-pointer hover:-translate-y-1 transition-all" />
            <FaTwitter className="text-lg md:text-2xl hover:text-cyan-500 cursor-pointer hover:-translate-y-1 transition-all" />
            <FaTelegram className="text-lg md:text-2xl hover:text-blue-500 cursor-pointer hover:-translate-y-1 transition-all" />
            <FaInstagram className="text-lg md:text-2xl hover:text-red-500 cursor-pointer hover:-translate-y-1 transition-all" />
            <FaMedium className="text-lg md:text-2xl  cursor-pointer hover:-translate-y-1 transition-all" />
            <FaFacebook className="text-lg md:text-2xl hover:text-blue-700 cursor-pointer hover:-translate-y-1 transition-all" />
            <FaReddit className="text-lg md:text-2xl hover:text-orange-800 cursor-pointer hover:-translate-y-1 transition-all" />
            <FaEnvelope className="text-lg md:text-2xl hover:text-red-800 cursor-pointer hover:-translate-y-1 transition-all" />
          </div>
        </div>
        <div className=" w-full md:w-6/12 justify-evenly flex-row  flex">
          <div className="md:w-3/12 w-1/2 flex flex-col gap-4 text-center">
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Partners
            </p>
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Services
            </p>
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              About Us
            </p>
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Careers
            </p>
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Contact Us
            </p>
          </div>
          <div className="md:w-3/12 w-1/2 flex flex-col gap-4 text-center">
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Terms
            </p>
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Policies
            </p>
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Products
            </p>
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Products
            </p>
            <p className="text-base hover:font-bold hover:translate-x-1 hover:text-yellow-500 transition-all cursor-pointer">
              Products
            </p>
          </div>
        </div>
        <div className="w-full md:w-3/12 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-yellow-500">
            Our <span className="font-light text-white">Newsletter</span>
          </h2>
          <p className="text-base">
            Subscribe to our <span className="font-bold">weekly</span>{" "}
            newsletter.{" "}
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              id="email"
              className="py-1 bg-transparent w-full rounded-md focus:border-yellow-500 border-white ring-0 focus:ring-0  focus:outline-none placeholder:text-yellow-500"
              placeholder="Your Email here."
            />
            <button className="py-1 font-bold w-full rounded text-black bg-yellow-500 hover:bg-emerald-100 hover:text-black">
              Subscribe!
            </button>
          </form>
        </div>
      </div>
      <hr className="h-[1px] rounded bg-white outline-none border-none my-4" />
      <div className="copyright">
        <p className="font-bold text-xs  text-center text-yellow-400 ">
          &copy; Recruitment Agency Inc. &mdash; {currentYear} &#x2022; All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
