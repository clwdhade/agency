import React from 'react'
import { Companies } from '../../Data/DataIndex'
import Marquee from "react-fast-marquee";


const HomeBanner = () => {
    return (
        <div className="text-center my-8 md:my-12">
            <h3 className="text-3xl py-8 font-bold text-yellow-500">Our <span className="font-light text-black">Partners</span></h3>
            <Marquee 
        className="w-full  h-[10dvh]  flex flex-row items-center justify-center"
        pauseOnHover={true}
        autoFill={true}
        >
            {
                Companies.map((company, index) => {
                    return (
                        <div key={index} className="w-full h-20 px-4">
                            <img src={company.image} alt={company.name} title={company.name} className="w-full h-20 object-contain object-center" />
                        </div>
                    )
                })
            }
        </Marquee>
        </div>
    )
}

export default HomeBanner
