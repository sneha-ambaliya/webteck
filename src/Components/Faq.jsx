import React from 'react'
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import faq from "../assets/faq.png"
const Faq = () => {
    return (
        <>
            <div className='max-w-[1440px] mx-auto'>
                <div className='flex justify-center gap-30 py-20 flex-wrap max-sm:gap-10 mac-sm:py-10 '>
                    <img src={c1} alt="" className='h-10' />
                    <img src={c2} alt="" className='h-10' />
                    <img src={c3} alt="" className='h-10' />
                    <img src={c4} alt="" className='h-10' />
                </div>
                <div className='grid lg:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-1 p-10 max-sm:p-2'>
                    <div>
                        <h1 className='text-[#684DF4] text-2xl font-bold max-sm:text-xl'>FAQ'S</h1>
                        <h1 className=' text-4xl font-bold py-8 max-sm:text-2xl'>Know More About Our It Solution</h1>
                        <div className='w-full py-3 px-10 bg-white font-bold text-2xl  max-sm:text-sm rounded-2xl flex justify-between items-center my-10 max-sm:my-5'>
                            <h1>where can i get analytics help ?</h1>
                            <h1 className='text-4xl'>+</h1>
                        </div>
                        <div className='w-full py-3 px-10 bg-white font-bold text-2xl max-sm:text-sm rounded-2xl flex justify-between items-center my-10 max-sm:my-5'>
                            <h1>How long should a business plan be ?</h1>
                            <h1 className='text-4xl'>+</h1>
                        </div>
                        <div className='w-full py-3 px-10 bg-white font-bold text-2xl max-sm:text-sm rounded-2xl flex justify-between items-center my-10 max-sm:my-5'>
                            <h1>Do i need a business plan ?</h1>
                            <h1 className='text-4xl'>+</h1>
                        </div>
                    </div>
                    <div className='pl-20 max-sm:pl-0'>
                        <img src={faq} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Faq