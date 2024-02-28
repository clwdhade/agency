import React from 'react'
import { Services } from '../../../Data/DataIndex'



const Service = () => {

    return (
        <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-8 rounded-lg">
            <h2 className="text-4xl text-center py-8 font-bold">Our <span className="font-light">Services</span></h2>
            <div className="flex flex-wrap gap-12 row-gap-12 justify-center">
                {
                    Services.map((service, index) => {
                        return (
                            <div  key={index} className="card w-[400px] p-4 shadow-lg rounded flex flex-col gap-4 hover:scale-100 hover:shadow-slate-600 ">
                                <div className="flex gap-2 items-center ">
                                    <div className=" border border-blue-500 rounded-full p-2">
                                        <img width={25} height={25} src={service.Image} alt="" srcset="" />
                                    </div>
                                    <h2 className="text-xl font-bold">{service.Service}</h2>
                                </div>
                                <p className="text-lg">{service.Description}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Service
