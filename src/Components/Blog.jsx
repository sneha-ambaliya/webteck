import React from 'react'
import b1 from "../assets/b1.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import calender from "../assets/calender.png"
import comments from "../assets/comments.png"

const Blog = () => {
  const services = [
    {
      img: b1,
      title: "Web development",
      desc: "Technology"
    },
    {
      img: b2,
      title: "Website design",
      desc: "Technology"
    },
    {
      img: b3,
      title: "SEO  Optimization",
      desc: "Marketing"
    }
  ];
  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <div className='my-10 ' >
          <h1 className='text-[#684DF4] text-2xl font-bold text-center' id="blog">NEWS & ARTICLES</h1>
          <h1 className='text-4xl font-bold text-center py-5'>Get Every Single Update Blog</h1>
        </div>
        <div className='flex justify-center'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10  p-10 px-20 max-md:px-5">
            {services.map((service, index) => (
              <div key={index} className=" max-sm:gap-5 rounded-4xl flex flex-col max-w-[400px] gap-5 shadow-md hover:shadow-xl transition-all duration-300 bg-white" data-aos="zoom-in" data-aos-duration="1800">
                <img src={service.img} alt="" className=" object-contain w-full" />
                <div className='px-8'>
                  <div className='flex justify-between gap-10 flex-nowrap items-center pb-5 max-sm:pb-5 '>
                    <div className='flex gap-2  max-md:text-xs flex-nowrap'>
                      <img src={calender} alt="" className='max-sm:h-5' />
                      <h1 className='text-[#00000080]'>13feb,2023</h1>
                    </div>
                    <div className='flex gap-2 max-md:text-xs flex-nowrap'>
                      <img src={comments} alt="" className='max-sm:h-5' />
                      <h1 className='text-[#00000080]'>2comments</h1>
                    </div>
                  </div>
                  <h1 className='text-xl font-bold max-md:text-lg'>Regional  manager limited<br />
                    time management.</h1>
                  <div className='border-1 w-[100%] my-5'></div>
                  <div className='flex justify-center'>
                    <button className='text-white bg-[#684DF4] rounded-xl text-center px-8 py-3 mb-5 text-xl'><a href="#">READ MORE</a><span className='pl-3'>➜</span> </button>
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

export default Blog