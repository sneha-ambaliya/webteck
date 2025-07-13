import React from 'react'
import choose from "../assets/choose.png"
import point from "../assets/point.png"

const Choose = () => {
    return (

        <>
            <div className='flex justify-center '>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 px-10 gap-30 mb-10 max-sm:px-5 max-w-[1440px] mx-auto '>
                    <div>
                        <h1 className='text-[#684DF4] text-2xl font-bold max-sm:text-xl'>WHY CHOOSE US</h1>
                        <h1 className='text-4xl font-bold mt-2 max-sm:text-2xl'>You Get IT & Business Solution</h1>
                        <p className='text-[#00000080] my-8  max-sm:my-10 max-sm:text-sm' >Dynamically brand plug-and-play action items for extensive leadership. Dramatically
                            seize prospective content through seamless collaboration. Quickly leverage existing
                            24/7 portals via scalable alignments.</p>
                        <div className='grid grid-cols-2 grid-rows-2 gap-5 max-sm:gap-2 max-sm:grid-cols-1 max-sm:grid-rows-1'>
                            <div className='flex gap-5 items-center'>
                                <img src={point} alt="" />
                                <h1 className='font-bold text-xl max-sm:text-sm'>Big Data Analysis</h1>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <img src={point} alt="" />
                                <h1 className='font-bold text-xl max-sm:text-sm'>High Quality Sicurity</h1>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <img src={point} alt="" />
                                <h1 className='font-bold text-xl max-sm:text-sm'>24/7 Online Support</h1>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <img src={point} alt="" />
                                <h1 className='font-bold text-xl max-sm:text-sm'>Virtual Support Team</h1>
                            </div>
                        </div>
                        <button className='text-white bg-[#684DF4] rounded-xl px-8 py-3 mt-8 text-xl'><a href="#">Learn more</a><span className='pl-3'>➜</span> </button>
                    </div>
                    <div>
                        <img src={choose} alt="" className='ml-10 max-sm:mx-0 sm:h-110 ' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Choose