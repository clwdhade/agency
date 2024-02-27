import React from 'react'

const Candidates = () => {
    return (
        <div className='w-full  relative'>

            <div className="w-3/4 py-12 -m-12 h-[71.5vh] relative z-10 bg-slate-800 "></div>
            <div className='candidates flex w-full flex-row items-center gap-8 absolute z-20 top-0 text-white '>
                <div className="content w-1/2 flex flex-col gap-4 items-end justify-center">
                    <h3 className="font-bold text-sm text-slate-300 absolute z-50 top-4 left-8 py-1 px-6 rounded w-max bg-slate-700 flex flex-row items-center gap-2 justify-center"> <span className='text-xl text-green-400 animate-ping transition-all ease-in-out'>&#x2022;</span>FOR CANDIDATES</h3>
                    <h3 className="text-3xl font-bold">Smash the Glass Ceiling</h3>
                    <p className="text-base text-end w-3/4">Agency Recruiting Inc. does not work with just anyone. We’re looking for mavericks that are going to slay their new position and keep rising in the ranks. Why? We have a very high success rate and we definitely attribute it to picking our unicorns in a sea of mediocrity.</p>
                    <button className="rounded py-2 px-1 text-white text-base font-semibold w-1/4 border hover:bg-emerald-900 hover:border-green-500 transition-all ease-in-out">Upload Your Resume</button>
                </div>
                <div className="w-1/2">
                    <img src="https://images.pexels.com/photos/7944171/pexels-photo-7944171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" title='Recent Graduands' className="rounded brightness-75 hover:brightness-100 transition-all ease-in-out" />
                </div>
            </div>
        </div>
    )
}

export default Candidates
