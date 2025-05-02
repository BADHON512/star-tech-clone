"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { BsLightningCharge, BsPcDisplayHorizontal } from 'react-icons/bs'
import { FaCodeCompare } from 'react-icons/fa6'
import { GoGift } from 'react-icons/go'
import { IoPersonSharp } from 'react-icons/io5'

type Props = {}

const BottomNav = (props: Props) => {
    return (
        <div className=' w-full border-t border-[#80808060] 1300:hidden h-[60px] bg-[#081621] fixed bottom-0 left-0 flex justify-around'>
            <div className="flex justify-center items-center flex-col gap-y-0.5">
                <GoGift size={20} className='cursor-pointer' color='white' />
                <span className='text-[12px] text-[#838383]'>Offers</span>
            </div>

            <div className="flex justify-center items-center flex-col gap-y-0.5">
                <AnimatePresence>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}>
                        <BsLightningCharge
                            className="mt-2" color='white' />
                    </motion.div>
                </AnimatePresence>
                <span className='text-[12px] text-[#838383]'>Happy Hour</span>
            </div>

            <div className="flex justify-center items-center flex-col gap-y-0.5">
                <BsPcDisplayHorizontal size={20} className='cursor-pointer' color='white' />
                <span className='text-[12px] text-[#838383]'>PC Builder</span>
            </div>

            <div className="flex justify-center items-center flex-col gap-y-0.5">
                <FaCodeCompare size={20} className='cursor-pointer' color='white' />
                <span className='text-[12px] text-[#838383]'>Compare</span>
            </div>

            <div className="flex justify-center items-center flex-col gap-y-0.5">
                <IoPersonSharp size={20} className='cursor-pointer' color='white' />
                <span className='text-[12px] text-[#838383]'>Account</span>
            </div>
        </div>
    )
}

export default BottomNav