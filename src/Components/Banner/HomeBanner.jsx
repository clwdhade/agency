import React from 'react'
import { Companies } from '../../Data/DataIndex'
import Marquee from "react-fast-marquee";


const HomeBanner = () => {
    return (
        <Marquee 
        className="w-full h-[10dvh]  flex flex-row items-center justify-center"
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
    )
}

export default HomeBanner
