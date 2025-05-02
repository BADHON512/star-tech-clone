import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'

import { IoSettingsOutline } from 'react-icons/io5'
import { MdLaptopChromebook, MdOutlineSearch } from 'react-icons/md'
import { TbMessageReport } from 'react-icons/tb'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="mt-18 1300:mt-10 max-w-[1297px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-7">
        {/* Left Banner Image */}
        <img
          src="images/banner1.webp"
          alt="Banner"
          className="lg:w-[70%]"
        />

        {/* Right Section */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">
          {/* Compare Box */}
          <div className="w-full bg-[#FEE289] flex items-center justify-center flex-col p-5 rounded-md shadow">
            <h1 className="text-center font-semibold text-lg">
              Compare Products
            </h1>
            <span className="text-sm text-[#4e4b4be5] mt-1">
              Choose Two Products to Compare
            </span>

         
            <div className="relative w-full mt-3">
              <input
                placeholder="Search and Select product"
                type="text"
                className="bg-white w-full text-[#272626] py-2 px-3 rounded-sm outline-none"
              />
              <MdOutlineSearch
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={22}
              />
            </div>

            {/* Input 2 */}
            <div className="relative w-full mt-3">
              <input
                placeholder="Search and Select product"
                type="text"
                className="bg-white w-full text-[#272626] py-2 px-3 rounded-sm outline-none"
              />
              <MdOutlineSearch
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={22}
              />
            </div>

            {/* Button */}
            <button className="bg-transparent border border-[#1212cc] w-full rounded-md py-2 mt-4 hover:bg-[#1212cc] hover:text-white transition-all duration-300">
              <span className="font-semibold">View Comparison</span>
            </button>
          </div>

          {/* Job Image */}
          <div>
            <img
              src="images/jobimage.webp"
              alt="Job"
              className="w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="h-[35px] bg-white mt-5 p-1 rounded-3xl">
        <div className=" w-[96%] mx-auto overflow-hidden">
          <div className="animated-div px-10  ">
            Thursday, 1st May, All Our Branches Will Remain Close except Elephant Road, Banani, Pragati Sharani Uttara Sonargaon Janapath Branch. Additionally, our online activities are open and operational.
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4  gap-5">
        {[
          {
            icon: <MdLaptopChromebook size={30} color="white" />,
            title: "Laptop Finder",
            subtitle: "Find Your Laptop Easily",
          },
          {
            icon: <TbMessageReport size={30} color="white" />,
            title: "Raise a Complain",
            subtitle: "Share your experience",
          },
          {
            icon: <AiOutlineHome size={30} color="white" />,
            title: "Home Service",
            subtitle: "Get Expert help.",
          },
          {
            icon: <IoSettingsOutline size={30} color="white" />,
            title: "Servicing Center",
            subtitle: "Repair Your Device",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-2 md:gap-x-5 bg-white py-4 px-3 md:px-6 rounded-md"
          >
            <div className="w-[60px] h-[60px] rounded-full bg-red-600 flex justify-center items-center shrink-0">
              {item.icon}
            </div>
            <div>
              <h1 className="font-semibold md:font-bold md:text-[18px] text-[#141111]">{item.title}</h1>
              <span className="text-sm text-[#444] hidden xl:block">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Hero