import React from 'react'
import HomeHero from '../../Components/Hero/HomeHero'
import Service from './Sections/Service'
import HomeBanner from '../../Components/Banner/HomeBanner'
import Reviews from './Sections/Reviews'
import Candidates from './Sections/Candidates'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <div className='home '>
            <HomeHero />
            <div className="home_wrapper mx-4 md:mx-12 my-8 py-8 flex flex-col gap-12">
                <HomeBanner />
                {/* <div className="flex flex-col gap-2">
                    <h5 className="text-base uppercase font-bold py-2 px-2 rounded w-max ">Top Notch Services in the Industry</h5>
                    <div className="grid grid-cols-2 gap-4 px-8">
                        <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum animi, eius dolorum magni quisquam illum a, id fugit dolorem, accusamus nesciunt dicta ratione expedita perspiciatis earum reprehenderit minima numquam. Impedit.</p>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos doloremque optio explicabo ad voluptas, temporibus nihil unde pariatur quod ratione quam officia corrupti animi debitis quos neque eveniet enim eum.</p>
                    </div>
                </div> */}
                <Service />
                <Reviews />
                <Candidates />
            </div>
            <Footer />
        </div>
    )
}

export default Home
