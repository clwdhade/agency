import React from 'react'
import HomeHero from '../../Components/Hero/HomeHero'

const Home = () => {
    return (
        <div className='home '>
            <HomeHero />
            <div className="home_wrapper mx-12 my-8 py-8 grid grid-cols-2">
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos doloremque optio explicabo ad voluptas, temporibus nihil unde pariatur quod ratione quam officia corrupti animi debitis quos neque eveniet enim eum.</p>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos doloremque optio explicabo ad voluptas, temporibus nihil unde pariatur quod ratione quam officia corrupti animi debitis quos neque eveniet enim eum.</p>
            </div>
        </div>
    )
}

export default Home
