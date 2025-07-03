import React from 'react';
import ser1 from "../assets/ser1.png";
import ser2 from "../assets/ser2.png";
import ser3 from "../assets/ser3.png";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

export const Service = () => {

    const services = [
        {
            img: ser1,
            title: "Data Management Service",
            desc: "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client."
        },
        {
            img: ser2,
            title: "World Class Support",
            desc: "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client."
        },
        {
            img: ser3,
            title: "IT Strategy & Consultancy",
            desc: "Intrinsicly maximize best-of-breed strategic theme areas whereas premium alignments. Collaboratively transition client."
        }
    ];
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='flex justify-center'>
            <div className="px-6 py-12 sm:px-10 md:px-20  max-w-[1440px] my-25">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 py-15 max-sm:py-6 max-sm:gap-5 rounded-2xl flex flex-col items-center gap-10 border border-[#684DF4] shadow-md hover:shadow-xl transition-all duration-300 " data-aos="zoom-out" data-aos-duration="1800">
                            <img src={service.img} alt="" className=" object-contain" />
                            <h1 className="font-bold text-xl text-center">{service.title}</h1>
                            <p className="text-center text-[#000000B2] text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
