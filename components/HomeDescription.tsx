import Link from 'next/link'
import React from 'react'

type Props = {}

const HomeDescription = (props: Props) => {
  return (
    <div className='mt-10 w-[90%] 1300:w-[1297px] mx-auto'>
        <h1 className=' text-[22px] leading-[28px]  font-[400]'>Leading Computer, Laptop & Gaming PC Retail & Online Shop in Bangladesh</h1>
        <h5 className='mt-4 text-[15px] leading-[26px] text-[#01132D]'>Technology has become a part of our daily lives, and we depend on tech products daily for a vast portion of our lives. There is hardly a home in Bangladesh without a tech product. This is where we come in. <Link href="https://www.startech.com.bd/" className='text-red-500'>Star Tech Ltd.</Link> started as a Tech Product Shop in March 2007. We focus on giving the best customer service in Bangladesh, following our motto of <strong>“Customer Comes First.”</strong> This is why Star Tech is the most <strong>trusted computer shop in Bangladesh</strong> today, capturing the loyalty of a large customer base. After a long 16-year journey, Star Tech Ltd. was certified with the renowned <strong>"ISO 9001:2015 certification"</strong> as a recognition for the best Quality Control Management System. As an ISO-certified organization, Star Tech Ltd. is now up to the international standards that specify a Quality Management System (QMS). This Certification denotes that the organization strictly maintains all sorts of regulatory requirements to provide customers with products and services of a global standard.</h5>

        <div className=" mt-10">
        <h1 className=' text-[22px] leading-[28px]  font-[400]'>Best Laptop Shop in Bangladesh</h1>
        <h5 className='mt-4 text-[15px] leading-[26px] text-[#01132D]'>Star Tech is the most popular Laptop Brand Shop in BD. Star Tech Laptop Shop has the perfect device, whether you are a freelancer, officegoer, or student. Gamers love our collection of Gaming Laptops because we always bring the latest laptops in Bangladesh. As the best laptop shop in BD, a customer’s budget is our first concern. We bring the latest Intel Laptop and AMD Laptop under budget for every customer - from starters to expert users. Star Tech is considered the most trusted laptop shop in BD, allowing you to buy the best laptops from top laptop brands in the world. Along with the best laptop brands, our experts provide you with the best buying decisions based on your needs and budget - making Star Tech the trusted and most popular laptop shop in Bangladesh. Star Tech lets you buy an official Apple MacBook Air or MacBook Pro from Apple Store in Bangladesh. Star Tech sells the latest models of the most popular laptop brands, such as - Razer, HP, Dell, Apple MacBook, Asus, Acer, Lenovo, Microsoft Surface, MSI, Gigabyte, Infinix, Walton, Xiaomi MI, Huawei, Chuwi, etc.</h5>
        </div>
    </div>
  )
}

export default HomeDescription