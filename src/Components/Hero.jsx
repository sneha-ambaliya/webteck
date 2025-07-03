import React from 'react'
import text from "../assets/herotextback.png"
import play from "../assets/hero_play.png"
import hero from "../assets/heroimg.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export const Hero = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex justify-center max-sm:gap-10 gap-20 max-w-[1440px] w-auto  pt-10 overflow-hidden flex-wrap max-lg:gap-2' id="Hero">
                    <div className=' bg-cover bg-center pt-40 max-sm:pt-20 max-sm:px-5 ' style={{ backgroundImage: `url(${text})` }} data-aos="fade-right" data-aos-duration="1800">
                        <h3 className='text-2xl text-[#684DF4] font-semibold pb-13 max-sm:text-sm '>Solution For Your Business</h3>
                        <h1 className='text-7xl mb-10 max-md:text-2xl max-sm:font-bold md:text-5xl'>Providing Technology<br />
                            For Smart <span className='text-[#684DF4]'>IT Solution</span></h1>
                        <p className='text-sm'>Rapidiously streamline revolutionary networks with technically sound deliverables. Authoritatively<br />
                            integrate installed base web-readiness. Quickly maximize superior process.</p>
                        <div className='flex gap-10 items-center mt-10 flex-wrap'>
                            <button className='text-white bg-[#684DF4] rounded-xl px-8 py-3  text-xl'><a href="#About">ABOUT US</a><span className='pl-3'>➜</span> </button>
                            <div className='flex gap-3'>
                                <div className='h-15 w-15 bg-[#745EF44D] rounded-full flex justify-center pt-2'>
                                    <div className='h-10 w-10 flex justify-center bg-[#745EF4] rounded-full'>
                                        <img src={play} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-xl text-[#000000]'>Watch Our Story</h1>
                                    <h5 className='text-sm text-[#00000066]'>Subscribe Now</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1800">
                        <img src={hero} alt="" className='mt-20 sm:h-120' />
                    </div>
                </div>
            </div>

        </>
    )
}
