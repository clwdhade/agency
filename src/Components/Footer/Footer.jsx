import { FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react'
import React from 'react'
import { FaAd, FaEnvelope, FaFacebook, FaInstagram, FaMedium, FaReddit, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=" flex w-full flex-col px-12 py-8 bg-slate-300 ">
            <div className="content w-full my-4 flex gap-4">
                <div className="about flex flex-col gap-4 w-3/12">
                    <h2 className="text-xl font-bold">Agency <span className='font-light'>Recruitment Inc.</span></h2>
                    <p className="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde temporibus distinctio repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    <div className="flex flex-row flex-wrap gap-4">
                        <FaWhatsapp className='text-2xl hover:text-green-500 cursor-pointer hover:-translate-y-1 transition-all' />
                        <FaTwitter className='text-2xl hover:text-cyan-500 cursor-pointer hover:-translate-y-1 transition-all' />
                        <FaTelegram  className='text-2xl hover:text-blue-500 cursor-pointer hover:-translate-y-1 transition-all'/>
                        <FaInstagram className='text-2xl hover:text-red-500 cursor-pointer hover:-translate-y-1 transition-all' />
                        <FaMedium className='text-2xl  cursor-pointer hover:-translate-y-1 transition-all' />
                        <FaFacebook  className='text-2xl hover:text-blue-700 cursor-pointer hover:-translate-y-1 transition-all'/>
                        <FaReddit className='text-2xl hover:text-orange-800 cursor-pointer hover:-translate-y-1 transition-all' />
                        <FaEnvelope  className='text-2xl hover:text-purple-800 cursor-pointer hover:-translate-y-1 transition-all'/>
                    </div>
                </div>
                <div className="w-3/12 flex flex-col gap-4 text-center">
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Partners</p>
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Services</p>
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">About Us</p>
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Careers</p>
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Contact Us</p>
                </div>
                <div className="w-3/12 flex flex-col gap-4 text-center">
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Terms</p>
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Policies</p>
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Products</p>
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Products</p>
                    <p className="text-base hover:font-bold hover:translate-x-1 transition-all cursor-pointer">Products</p>
                </div>
                <div className="w-3/12 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Our <span className='font-light'>Newsletter</span></h2>
                    <p className="text-base">Subscribe to our <span className='font-bold'>weekly</span> newsletter. </p>
                    <form className="flex flex-col gap-4">
                        <input type="email" name="email" id="email" className="py-1 bg-transparent w-full rounded-md " placeholder="Your Email here." />
                    <button className="py-1 font-bold w-full rounded text-white bg-emerald-700 hover:bg-emerald-900">Subscribe!</button>
                    </form>
                </div>
            </div>
            <hr className="h-[1px] rounded bg-black outline-none border-none my-4" />
            <div className="copyright">
                <p className="font-bold text-xs  text-center ">&copy; Agency Inc. &mdash; 2024</p>
            </div>
        </div>

    )
}

export default Footer
