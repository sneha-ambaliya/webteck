import React from 'react'
import call from "../assets/call.png"
import mail from "../assets/mail.png"
import location from "../assets/location.png"
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-[#e9f0f6] text-gray-800 mt-20">
            <div className="bg-[#7c5dfa] text-white p-6 rounded-t-3xl grid grid-cols-1 md:grid-cols-3 py-10 max-md:gap-10 max-w-[1440px] mx-auto ">
                <div className="flex items-center gap-4 justify-center animate-fade-in">
                    <div className="relative w-fit group hover:scale-105 transition-transform duration-200">
                        <div className="absolute bottom-3 right-3 bg-black rounded-xl w-full h-full"></div>
                        <div className="relative bg-white text-[#7c5dfa] p-9 max-md:p-2 rounded-xl w-fit group-hover:shadow-xl">
                            <img src={call} alt="" className="h-10 w-10" />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Quick Call Us:</p>
                        <p>+190-8800-0393</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center animate-fade-in delay-100">
                    <div className="relative w-fit group hover:scale-105 transition-transform duration-200">
                        <div className="absolute bottom-3 right-3 bg-black rounded-xl w-full h-full"></div>
                        <div className="relative bg-white text-[#7c5dfa] p-9 rounded-xl max-md:p-2 w-fit group-hover:shadow-xl">
                            <img src={mail} alt="" className="h-10 w-10" />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Mail Us On:</p>
                        <p>info@web.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center  animate-fade-in delay-200">
                     <div className="relative w-fit group hover:scale-105 transition-transform duration-200">
                        <div className="absolute bottom-3 right-3 bg-black rounded-xl w-full h-full"></div>
                        <div className="relative bg-white text-[#7c5dfa] p-9 rounded-xl w-fit max-md:p-2 group-hover:shadow-xl">
                            <img src={location} alt="" className="h-12 w-10" />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Visit Location:</p>
                        <p>54 Surat, India</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[#B5C6EB]  gap-10 p-8 items-center max-w-[1440px] mx-auto ">
                <div className="animate-fade-in">
                    <img src={logo} alt="" className='mb-10'/>
                    <p className="text-sm text-white">
                        Thank you for exploring our website! We warmly  you to discover our social media platforms, where you'll find valuable insights and updates tailored just for you.
                    </p>
                </div>

                <div className="animate-fade-in delay-100">
                    <h3 className="font-semibold text-lg mb-2">Services</h3>
                    <ul className="space-y-1 text-gray-600 ">
                        <li>Web Development</li>
                        <li>Digital Marketing</li>
                        <li>Data Analyst</li>
                        <li>Proven Result</li>
                    </ul>
                </div>

                <div className="animate-fade-in delay-200">
                    <h3 className="font-semibold text-lg mb-2 ">Links</h3>
                    <ul className="space-y-1 text-gray-600">
                        <li><a href="#Hero">Home</a></li>
                        <li><a href="#About">About Us</a></li>
                        <li><a href="#work">Projects</a></li>
                        <li><a href="#service">Services</a></li>
                    </ul>
                </div>

                <div className="animate-fade-in delay-300">
                    <h3 className="font-semibold text-lg mb-2">Contacts</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <i className="fas fa-envelope mr-2 text-[#7c5dfa]"></i>
                            Info@Webteck.Com
                        </li>
                        <li>
                            <i className="fas fa-phone mr-2 text-[#7c5dfa]"></i>
                            +91 99988 70597
                        </li>
                        <li>
                            <i className="fas fa-phone mr-2 text-[#7c5dfa]"></i>
                            +91 92652 70733
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
        </footer>
    )
}

export default Footer