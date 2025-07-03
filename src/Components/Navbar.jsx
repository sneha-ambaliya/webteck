import React, { useState } from 'react';
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleSearch = () => setShowSearch(prev => !prev);
    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <>

            <div className='flex justify-between items-center bg-[#E1EAF4] p-5 rounded-2xl max-sm:rounded-none w-full fixed z-50 top-0'>


                <img src={logo} alt="logo" className='h-10 max-sm:h-10' />


                <div className='hidden lg:flex justify-center gap-10 text-xl font-semibold'>
                    <a href="#Hero">Home</a>
                    <a href="#About">About us</a>
                    <a href="#service">Service</a>
                    <a href="#blog">Blog</a>
                </div>


                <div className='flex items-center gap-4'>


                    <div className='hidden lg:block'>
                        <button
                            onClick={toggleSearch}
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:shadow"
                        >
                            <img src={searchIcon} alt="search" className="w-5 h-5" />
                        </button>
                    </div>


                    <div className='hidden lg:block'>
                        {showSearch ? (
                            <input
                                type="text"
                                autoFocus
                                placeholder="Search..."
                                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 cursor-pointer focus:ring-[#6C4DFF] w-31"
                            />
                        ) : (
                            <button className="bg-[#684DF4] text-white font-semibold px-6 py-2  rounded-2xl cursor-pointer">
                                Contact us
                            </button>
                        )}
                    </div>


                    <button className='block lg:hidden' onClick={toggleMenu}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>


            <div
                className={`fixed top-0 right-0 h-full w-64 z-[90] bg-[#E1EAF4] shadow-lg transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    } block lg:hidden p-6 pt-6 rounded-l-2xl`}
            >

                <div className='flex justify-end mb-6'>
                    <button onClick={toggleMenu}>
                        <X size={28} />
                    </button>
                </div>


                <div className='flex flex-col gap-6 text-lg font-semibold'>
                    <a href="#Hero" onClick={toggleMenu}>Home</a>
                    <a href="#About" onClick={toggleMenu}>About us</a>
                    <a href="#service" onClick={toggleMenu}>Service</a>
                    <a href="#blog" onClick={toggleMenu}>Blog</a>
                    <button className="bg-[#684DF4] text-white font-semibold px-6 py-2 rounded-2xl mt-4">
                        Contact us
                    </button>
                </div>
            </div>


            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-10 z-30 block lg:hidden"
                    onClick={toggleMenu}
                />
            )}
        </>
    );
};
