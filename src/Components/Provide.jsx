import React from 'react'
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"
import s4 from "../assets/s4.png"
import s5 from "../assets/s5.png"
import s6 from "../assets/s6.png"
import s7 from "../assets/s7.png"

const Provide = () => {
    const services = [
        {
            img: s5,
            title: "UI/UX  DESIGN",
            desc: "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client."
        },
        {
            img: s6,
            title: "DIGITAL MARKETING",
            desc: "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client."
        },
        {
            img: s7,
            title: "BUSINESS ANALYSIS",
            desc: "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client."
        }
    ];
    return (
        <>
            <div className='flex justify-center'>
                <div className='bg-gradient-to-r from-[#B5C6EB]  to-[#ECE5B5] py-20 px-10 rounded-4xl my-30 max-sm:px-5 max-w-[1440px] max-auto' id="service">
                    <div className='flex px-15  justify-center flex-wrap gap-15 items-center max-sm:px-5'>
                        <div className='flex  items-center '>
                            <img src={s1} alt="" className='h-15' />
                            <div className=''>
                                <h1 className='font-bold text-center text-2xl mb-2'>986+</h1>
                                <p className='font-semibold '>Finished Project</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={s2} alt="" className='h-15' />
                            <div className=''>
                                <h1 className='font-bold text-center text-2xl mb-2'>896+</h1>
                                <p className='font-semibold'>Happy Clients</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={s3} alt="" className='h-15' />
                            <div className=''>
                                <h1 className='font-bold text-center text-2xl mb-2'>396+</h1>
                                <p className='font-semibold'>Skilled Experts</p>
                            </div>
                        </div>
                        <div className='flex  items-center'>
                            <img src={s4} alt="" />
                            <div className=''>
                                <h1 className='font-bold text-center text-2xl mb-2'>496+</h1>
                                <p className='font-semibold'>Honorable Awards</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-20'>
                        <div >
                            <h5 className='text-center font-bold text-xl text-[#684DF4] max-sm:text-sm'>OUR SERVICES</h5>
                            <h1 className='text-center text-5xl pt-5 font-bold max-sm:text-3xl'>We Provide Exclusive Services</h1>
                            <div className="px-6 py-12 sm:px-10 md:px-20 max-sm:px-0 ">
                                <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 ">
                                    {services.map((service, index) => (
                                        <div key={index} className="p-6 py-15  max-sm:py-6 max-sm:gap-5 rounded-2xl flex flex-col items-center gap-5 shadow-md hover:shadow-xl transition-all duration-300 bg-white" data-aos="zoom-out" data-aos-duration="1800">
                                            <img src={service.img} alt="" className=" object-contain h-30 w-30" />
                                            <h1 className="font-bold text-xl text-center">{service.title}</h1>
                                            <p className="text-center text-[#000000B2] text-sm">{service.desc}</p>
                                            <button className='text-white bg-[#684DF4] rounded-xl px-8 py-3  text-xl'><a href='#'>READ MORE</a><span className='pl-3'>➜</span> </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Provide