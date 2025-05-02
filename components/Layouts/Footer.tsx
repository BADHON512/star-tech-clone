import { h1 } from 'framer-motion/client'
import React from 'react'
import { BiLogoPlayStore } from 'react-icons/bi'
import { BsFacebook } from 'react-icons/bs'
import { FaAppStoreIos, FaWhatsappSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { IoCallOutline, IoLocationSharp, IoLogoWhatsapp } from 'react-icons/io5'

type Props = {}

const Footer = (props: Props) => {

  return (
    <footer className=' w-full  px-5 lg:px-0   bg-[#081621] min-h-[444px] mt-10'>
      <div className="w-[90%] 1300:w-[1297px] mx-auto  text-white ">
        <div className="mt-5 w-full grid grid-cols-1 xl:grid-cols-5  justify-items-center">

          <div className='mt-10'>
            <h1 className='text-sm tracking-[4px] '>SUPPORT</h1>
            <button className='mt-8 flex items-center gap-x-4 border py-3 px-5 rounded-4xl w-[275px] border-[#302f2fcc] hover:border-[red] cursor-pointer'>
              <IoCallOutline size={25} color='white' />
              <span className='h-[35px] w-[1px] border-r border-[gray]'></span>
              <div className="">
                <span className='text-[12px] text-[#838383]'>Temporarily closed for May Day  </span>
                <h6 className='text-[red] font-bold text-left text-[20px] '>16793</h6>
              </div>

            </button>

            <button className='mt-5 flex items-center gap-x-4 border py-3 px-5 rounded-4xl  w-[275px] border-[#302f2fcc] hover:border-[red] cursor-pointer'>
              <IoLocationSharp size={25} color='white' />
              <span className='h-[35px] w-[1px] border-r border-[gray]'></span>
              <div className="">
                <span className='text-[12px] inline-block text-[#838383] text-left  -ml-14'>Store Location </span>
                <h6 className='text-[red] font-bold  text-[20px] '>Find Our Stores</h6>
              </div>

            </button>
          </div>

          <div className="mt-10">
            <h1 className='text-sm tracking-[4px] text-center '>ABOUT US</h1>

            <h6 className='w-full text-center text-sm hover:text-red-500 mt-4  text-[#838383] block xl:hidden '> Affiliate Program , Online Delivery , Refund and Return Policy , Blog , About Us , Terms and Conditions , Career , Brands , EMI Terms , Privacy Policy , Star Point Policy , Contact Us </h6>

            <div className="hidden xl:block">
              <div className="flex flex-col ">
                <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-8 cursor-pointer  '>Affiliate Program</span>
                <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '>Online Delivery</span>
                <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '>Refund and Return Policy</span>
                <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '>Blog</span>

              </div>
            </div>
          </div>


          <div className="mt-10 hidden xl:block">
            <h1 className='text-sm tracking-[4px] '></h1>

            <div className="flex flex-col">
              <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-8 cursor-pointer '> About Us</span>
              <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '> Terms and Conditions</span>
              <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '>Career</span>
              <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '>Brands</span>

            </div>
          </div>


          <div className="mt-10 hidden xl:block">
            <h1 className='text-sm tracking-[4px] '></h1>

            <div className="flex flex-col">
              <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-8 cursor-pointer '> EMI Terms</span>
              <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '> Privacy Policy</span>
              <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '> Star Point Policy</span>
              <span className='text-sm hover:text-red-500 inline-block text-[#838383] mt-4 cursor-pointer '> Contact Us</span>

            </div>
          </div>

          <div className="mt-10">
            <h1 className='text-sm tracking-[4px] '>STAY CONNECTED</h1>

            <div className="flex flex-col">
              <span className='inline-block text-[#f0f0f0] mt-8 cursor-pointer '> Star Tech Ltd</span>
              <span className='text-sm  inline-block text-[#838383] mt-4 cursor-pointer '>Head Office: 28 Kazi Nazrul Islam</span>
              <span className='text-sm  inline-block text-[#838383] mt-4 cursor-pointer '> Ave,Navana Zohura Square, Dhaka 1000</span>
              <span className='text-sm  inline-block text-[#838383] mt-4 cursor-pointer '>Email : <span className='text-red-500'>webteam@startechbd.com</span></span>

            </div>
          </div>

        </div>

        <div className="mt-10 border-y py-4 border-[#80808057] flex justify-between flex-col lg:flex-row items-center">

          <div className="flex gap-x-5 items-center flex-col lg:flex-row">
            <span className='text-sm  inline-block text-[#838383]  cursor-pointer '> Experience Star Tech App on your mobile:
            </span>

            <div className=" flex gap-x-3 mt-3">
              <div className="w-[127px] h-[39px] border border-[#8080808c] hover:border-[#dbdbdb] rounded-md flex items-center justify-center cursor-pointer gap-x-2">
                <BiLogoPlayStore size={30} color='white' />
                <div className="">
                  <h1 className='text-[10px] text-[#838383]'>Download App</h1>
                  <h1 className='text-[14px] text-[#ffffff]'> Google Play</h1>
                </div>
              </div>

              <div className="w-[127px] h-[39px] border border-[#8080808c] hover:border-[#dbdbdb] rounded-md flex items-center justify-center cursor-pointer gap-x-2">
                <FaAppStoreIos size={27} color='white' />
                <div className="">
                  <h1 className='text-[10px] text-[#838383]'>Download App</h1>
                  <h1 className='text-[14px] text-[#ffffff]'> Google Play</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-3 mt-4 lg:mt-0">
            <span className='w-[40px] h-[40px] bg-[#8080804d] rounded-full flex items-center justify-center hover:bg-[#3749BB] cursor-pointer'>
              <IoLogoWhatsapp size={25} color='white' />
            </span>


            <span className='w-[40px] h-[40px] bg-[#8080804d] rounded-full flex items-center justify-center hover:bg-[#3749BB] cursor-pointer'>
              <BsFacebook size={25} color='white' />
            </span>

            <span className='w-[40px] h-[40px] bg-[#8080804d] rounded-full flex items-center justify-center hover:bg-[#3749BB] cursor-pointer'>
              <FaYoutube size={25} color='white' />
            </span>

            <span className='w-[40px] h-[40px] bg-[#8080804d] rounded-full flex items-center justify-center hover:bg-[#3749BB] cursor-pointer'>
              <FaSquareInstagram size={25} color='white' />
            </span>
          </div>
        </div>


        <div className=" mt-4 flex justify-between flex-col md:flex-row items-center  pb-5">
          <p className='text-sm  inline-block text-[#838383]  cursor-pointer '> © 2025 Ster Tech Ltd | All rights reserved</p>
          <p className='text-sm  inline-block text-[#838383]  cursor-pointer '>Powered By: Ster Tech</p>
        </div>
      </div>


    </footer>
  )
}

export default Footer