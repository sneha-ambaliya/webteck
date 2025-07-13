
import backimg from "../assets/backimg2.png"
import avatar1 from "../assets/dp.png"
import React, { useState } from 'react';
import q1 from "../assets/q1.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const reviews = [
    {
        text: "“Completely drive innovative value whereas out-of- the-box paradigms. Interactively pursue stand-alone markets after global results. Globally plagiarize ermandated opportunities with. Progressively leverage others multifunctional methods.”",
        name: "MD Sumon Mia",
        role: "CEO at ANTON",
        avatar: avatar1
    },
    {
        text: "“Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Globally plagiarize ermandated opportunities with. Progressively leverage others multifunctional methods.”",
        name: "MD Sumon Mia",
        role: "Marketing Head at SoftHub",
        avatar: avatar1
    },
    {
        text: "“Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products. Globally plagiarize ermandated opportunities with. Progressively leverage others multifunctional methods.”",
        name: "MD Sumon Mia",
        role: "CTO at CodeNest",
        avatar: avatar1
    },
];

const Review = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentReview = reviews[currentIndex];

    return (
        <div className="bg-cover bg-center h-170 rounded-4xl mt-10 px-20 py-20 max-sm:p-5 max-w-[1440px] mx-auto"
            style={{ backgroundImage: `url(${backimg})` }}>
            <div className=" p-15 rounded-3xl shadow-md bg-white  space-y-15  h-full lg:w-[50%]  md:w-full  max-sm:w-full max-sm:p-5"  data-aos="zoom-in" data-aos-duration="1800">
               
                <p className="text-gray-600 text-xl leading-relaxed max-sm:text-sm">
                    {currentReview.text}
                </p>

                
                <div className="flex items-center gap-4 ">
                    <img
                        src={currentReview.avatar}
                        alt={currentReview.name}
                        className="h-15 w-15 rounded-full object-cover"
                    />
                    <div className="text-left">
                        <p className="font-bold text-sm">{currentReview.name}</p>
                        <p className="text-xs text-gray-500">{currentReview.role}</p>
                    </div>
                </div>

                
                <div className="flex items-center justify-between px-6">
                    
                    <div className="flex gap-2">
                        {reviews.map((_, idx) => (
                            <span
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentIndex === idx ? 'bg-[#6C4DFF]' : 'bg-gray-200'
                                    }`}
                            ></span>
                        ))}
                    </div>

                  
                    <img src={q1} alt="quote icon" className="h-20 w-20" />
                    
                </div>
            </div>


        </div>
    )
}

export default Review