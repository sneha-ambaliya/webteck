import React from 'react'
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"

const Work = () => {
    const services = [
        {
            img: p1,
            title: "Web development",
            desc: "Technology"
        },
        {
            img: p2,
            title: "Website design",
            desc: "Technology"
        },
        {
            img: p3,
            title: "SEO  Optimization",
            desc: "Marketing"
        }
    ];
    return (
        <>
            <div className='bg-gradient-to-r from-[#B5C6EB]  to-[#ECE5B5] py-20 px-20 rounded-4xl my-30 max-sm:px-5 max-w-[1440px] mx-auto ' id="work">
                <div className='flex justify-between max-sm:flex-wrap'>
                    <div >
                        <h1 className='text-[#684DF4]  text-2xl max-sm:text-xl font-bold'>CASE STUDY</h1>
                        <h1 className='text-4xl font-bold my-5'>Our Portfolio / Works</h1>
                    </div>
                    <div>
                        <button className='text-white bg-[#684DF4] rounded-xl px-8 py-3 mt-8 text-xl'><a href="#">View all products</a><span className='pl-3'>➜</span> </button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 max-md:grid-cols-1 gap-8 mt-20  ">
                        {services.map((service, index) => (
                            <div key={index} className=" max-sm:gap-5 rounded-4xl flex flex-col max-w-[400px] items-center gap-5 shadow-md hover:shadow-xl  transition-all duration-300 bg-white  " data-aos="zoom-out" data-aos-duration="1800">
                                <img src={service.img} alt="" className=" object-contain w-full   " />
                                <div className='flex gap-10 items-center pb-5  max-md:pb-5'>
                                    <div>
                                        <h1 className='text-2xl font-bold mb-3 max-sm:mb-1 max-sm:text-[18px]'>{service.title}</h1>
                                        <h5 className='text-[#684DF4] max-md:text-[15px]'>{service.desc}</h5>
                                    </div>
                                    <div>
                                        <button className='text-white bg-[#684DF4] rounded-sm  max-sm:px-4 py-4 font-bold  max-sm:h-15 w-15 text-2xl'>+ </button>
                                    </div>

                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work