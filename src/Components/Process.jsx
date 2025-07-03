import React from 'react'
import line from "../assets/line.png"
import stap1 from "../assets/stap1.png"
import stap2 from "../assets/stap2.png"
import stap3 from "../assets/stap3.png"
import stap4 from "../assets/stap4.png"

const Process = () => {
    return (
        <>
            <div className='px- pb-20 max-lg:px-10'>
                <div>
                    <h1 className='text-center text-2xl text-[#684DF4] font-bold'>WORK PROCESS</h1>
                    <h1 className='text-center text-4xl font-bold py-5 max-lg:pb-20'>How To Work It!</h1>
                </div>
                <div>
                    <div className='flex justify-center max-lg:hidden '>
                        <img src={line} alt="" className='mt-15 w-210 ' />
                    </div>
                    <div className='flex justify-center gap-10 mt-15 max-md:flex-wrap  md:flex-wrap max-sm:flex-wrap '>
                        <div className='p-8 bg-white rounded-3xl flex flex-col justify-center gap-4 items-center shadow-2xl  h-70 w-60 -mt-20   '>
                            <img src={stap1} alt="" className='h-20 w-20 justify-center' />
                            <h1 className='text-2xl font-bold'>Select a project</h1>
                            <p className='text-sm text-[#00000080] text-center'>Continua scale empowered<br />
                                metrics with cost effective<br />
                                innovation.
                            </p>

                        </div>
                        <div className='p-8 bg-white rounded-3xl flex flex-col justify-center gap-4 items-center h-70 w-60 shadow-2xl '>
                            <img src={stap2} alt="" className='h-20 w-20 justify-center' />
                            <h1 className='text-2xl font-bold'>Project analysis</h1>
                            <p className='text-sm text-[#00000080] text-center'>Continua scale empowered<br/>
                                metrics with cost effective<br/>
                                innovation.</p>

                        </div>
                        <div className='p-8 bg-white rounded-3xl flex flex-col justify-center gap-4 items-center h-70 w-60 -mt-20  shadow-2xl max-sm:mt-25'>
                            <img src={stap3} alt="" className='h-20 w-20 justify-center' />
                            <h1 className='text-2xl font-bold'>Plan Execute</h1>
                            <p className='text-sm text-[#00000080] text-center'>Continua scale empowered<br />
                                metrics with cost effective<br />
                                innovation.</p>

                        </div>
                        <div className='p-8 bg-white rounded-3xl flex flex-col justify-center gap-4 items-center w-60 shadow-2xl'>
                            <img src={stap4} alt="" className='h-20 w-20 justify-center' />
                            <h1 className='text-2xl font-bold'>Deliver result</h1>
                            <p className='text-sm text-[#00000080] text-center'>Continua scale empowered<br />
                                metrics with cost effective<br />
                                innovation.</p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Process