import React from 'react'
import { BsArrowBoxUpRight } from "react-icons/bs"

const HomeCTA = () => {
    return (
        <div className='flex md:flex-row flex-col gap-4 mt-16 p-12 rounded bg-emerald-200'>
            <div className="w-3/4 flex flex-col gap-4 items-center">
                <p className="text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eius alias beatae repellendus? Esse in molestias dolorem, quibusdam velit voluptates exercitationem, nemo dolores quos dolorum vero assumenda voluptatem? </p>
                <p className="text-xl font-bold">Reprehenderit, saepe.</p>
            </div>
            <div className="w-1/4 flex items-center flex-col justify-center">
                <button className="py-2 text-lg font-bold rounded bg-transparent border-2 border-green-500 hover:bg-emerald-700 hover:text-white w-3/4 transition-all hover:-translate-y-1 ease-in-out flex flex-row justify-center gap-4 items-center">Get started! <BsArrowBoxUpRight className='text-base font-bold' /></button>
            </div>
        </div>
    )
}

export default HomeCTA
