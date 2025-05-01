import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'

type Props = {}

const FeaturedCategory = (props: Props) => {
    return (
        <div className='mt-16 1300:w-[1297px] mx-auto p-2'>
            <h1 className='text-center font-bold text-[20px] leading-[26px]'>Featured Category</h1>
            <h5 className='mt-2 text-center text-[#444]'>Get Your Desired Product from Featured Category!</h5>

            <div className="w-full mt-10 flex flex-wrap gap-3 justify-center">
                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/drone.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Drone</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/gimbal.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Gimbal</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/charger-fan.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Charger Fan</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/weight-scale.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Weight Scale</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/tv.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Tv</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/mobile-phone-.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Mobile Phone</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/mobile-phone-.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Mobile Accessories</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/portable-ssd.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Portable SSD</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/portable-ip-camer.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Portable WiFi</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/trimmer.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Trimmer</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/smart-watch.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Smart Watch</h5>
                </div>


                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/action-camera-.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Action Camera</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/earphone-.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Earphone</h5>
                </div>
                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/earbuds-.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Earbuds</h5>
                </div>

                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/bt-speaker-.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Bluetooth Speakers</h5>
                </div>
                <div className="h-[130px] w-[145px] flex-col bg-white cursor-pointer rounded-2xl flex items-center justify-center">
                    <img src="images/gaming-console-.png" className='object-cover' alt="" />
                    <h5 className='mt-2 text-red-500'>Gaming Console</h5>
                </div>
            </div>

            {/* Find your location */}

            <div className="w-full py-10 md:py-0 min-h-[136px] mt-20 rounded-md gradient-box flex items-center justify-between px-5 flex-col md:flex-row">
                <div className="
            flex gap-x-3 items-center flex-col md:flex-row">
                    <SlLocationPin size={50} color='white' />

                    <div className="text-white  mt-5 md:mt-0 ">
                        <h1 className='font-bold text-[30px] leading-[36px] text-center md:text-start'>20+ Physical Stores</h1>
                        <h5 className='text-[18px] leading-[24px] mt-2 '>Visit Our Stare & Get Your Desired IT Product!</h5>
                    </div>
                </div>

                <div className="relative mt-5 md:mt-0">
                    <button

                        className="bg-[#EF9919] flex gap-x-2 justify-center w-[250px] text-[black] font-bold py-4 px-3 rounded-4xl "
                    >Find your Store
                        <MdOutlineSearch

                            size={25}
                        />
                    </button>


                </div>
            </div>



        </div>
    )
}

export default FeaturedCategory