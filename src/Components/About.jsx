import React from 'react'
import about from "../assets/about.png"
import point from "../assets/point.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className='flex justify-center max-w-[1440px] mx-auto'>
                <div className='grid grid-cols-2  max-lg:grid-cols-1 gap-10 max-sm:px-5 px-15' id="About">
                    <div data-aos="fade-right" data-aos-duration="1800">
                        <img src={about} alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1800">
                        <h2 className='text-[#684DF4]  font-bold text-xl '>About Company</h2>
                        <h1 className='text-4xl font-bold py-10 max-sm:text-3xl'>We've Been Thriving For 25 Years.</h1>
                        <p className='text-[#00000080] text-[15px] max-sm:text-[10px]'>Continually harness backward-compatible initiatives and synergistic content. Objectively
                            strategize cutting edge niches with collaborative synergy. Globally pontificate e-business
                            processes through orthoonal web readiness enhance backend value.</p>
                        <div className='flex gap-5 items-center my-7 '>
                            <img src={point} alt="" />
                            <h1 className='max-sm:text-sm'>Dramatically re-engineer value added IT systems via mission</h1>
                        </div>
                        <div className='flex gap-5 items-center my-7'>
                            <img src={point} alt="" />
                            <h1 className='max-sm:text-sm'>Website & Mobile application design & Development</h1>
                        </div>
                        <div className='flex gap-5 items-center my-7'>
                            <img src={point} alt="" />
                            <h1 className='max-sm:text-sm'> Professional User Experince & Interface researching</h1>
                        </div>
                        <button className='text-white bg-[#684DF4] rounded-xl px-8 py-3  text-xl'><a href="#">ABOUT US</a><span className='pl-3'>➜</span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}
