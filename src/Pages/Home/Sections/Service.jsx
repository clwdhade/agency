import React from 'react'
import { Services } from '../../../Data/DataIndex'



const Service = () => {

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-8 rounded-xl">
            <h2 className="text-4xl text-center py-8 font-bold">Our <span className="font-light">Services</span></h2>
            <div className="flex flex-wrap gap-12 row-gap-12 justify-center">
                {
                    Services.map((service, index) => {
                        return (
                            <div key={index} className="card w-[450px] p-4 shadow-lg rounded flex flex-col gap-4 hover:scale-100 hover:shadow-slate-600 ">
                                <h2 className="text-xl font-bold">{service.Service}</h2>
                                <p className="text-lg">{service.Description}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Service
