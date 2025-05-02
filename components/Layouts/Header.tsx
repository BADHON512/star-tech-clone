"use client"
import React from 'react'
import { BsLightningCharge } from 'react-icons/bs'
import { GoGift } from 'react-icons/go'
import { AnimatePresence, motion } from 'framer-motion';

import { MdOutlineSearch, MdShoppingBasket } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
import { VscThreeBars } from 'react-icons/vsc';
import Image from 'next/image';
import Link from 'next/link';
type Props = {}

const Header = (props: Props) => {

    return (
        <div className='bg-[#081621] h-[60px] 1300:h-[81px] fixed top-0 left-0 w-full z-40 1300:static '>
            <div className="w-full 1300:w-[1297px] mx-auto text-white  h-full px-5 ">
                <div className="mx-auto hidden 1300:flex text-white items-center h-full justify-between w-full">

                    <Link href="/">
                        <Image height={1000} width={1000} className='w-[110px] ' src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1746131141/logo_h8rh1m.webp" alt="" /></Link>

                    <div className="relative">
                        <input placeholder='Search' type="text" className='bg-white w-[581px]  text-[#272626] py-2 px-3 rounded-sm outline-none' />
                        <MdOutlineSearch className='absolute right-3 top-2 text-gray-500' size={25} />
                    </div>
                    <div className="flex  items-center gap-x-3 cursor-pointer ">

                        <GoGift size={20} color='red' className="mt-2" />

                        <div className=" leading-[25px]">
                            <h5>Offers</h5>
                            <p className='text-[#c5c5c5bd] text-xs'>Latest Offers</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3 cursor-pointer">
                        <AnimatePresence>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}>
                                <BsLightningCharge
                                    className="mt-2" />
                            </motion.div>
                        </AnimatePresence>

                        <div className=" leading-[25px] cursor-pointer">
                            <h5>happy hour</h5>
                            <p className='text-[#c5c5c5bd] text-xs'>Special Deals</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-3">
                        <IoPersonSharp className='cursor-pointer mt-2' size={20} color='red' />
                        <div className=" leading-[25px]">
                            <h5 className='cursor-pointer'>Account</h5>
                            <p className='text-[#c5c5c5bd] text-xs'><span className='hover:text-red-600 cursor-pointer'>Resister</span> & <span className='hover:text-red-600 cursor-pointer'>login</span></p>
                        </div>
                    </div>

                    <div className="">
                        <button
                            className="relative inline-flex items-center justify-center  text-white font-semibold  overflow-hidden shadow-lg cursor-pointer w-[108px] h-[40px]"

                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#2D64C5] via-[#1F38A0] to-[#1F38A0] bg-[length:200%_200%] animate-gradientMove rounded-sm"></span>
                            <span className="relative z-10">PC Builder</span>
                        </button>
                    </div>
                </div>

                {/* for small screen */}

                <div className="1300:hidden flex justify-between items-center h-full">
                    <VscThreeBars size={30} />
                    <img className='w-[110px] ' src="/images/logo.png" alt="" />
                    <div className="flex gap-x-3 items-center">
                        <MdOutlineSearch size={30} />
                        <div className="relative">
                            <MdShoppingBasket size={30} />
                            <span className='h-4 w-4 rounded-full bg-red-500 absolute flex justify-center items-center -top-2 -right-2 text-sm p-1' >0</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header