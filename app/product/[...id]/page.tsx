"use client"
import Footer from '@/components/Layouts/Footer'
import Header from '@/components/Layouts/Header'
import { ProductData } from '@/productData'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const Page = (props: Props) => {
  const [product, setproduct] = useState()
  const [count, setcount] = useState(1)
  const [active, setactive] = useState(0)
  const [selectedPayment, setSelectedPayment] = useState("full")
  const params = useParams()
  const paramId = params.id?.toString()


  useEffect(() => {
    const filterProduct = ProductData?.find((item, index) => item.id == paramId)
    setproduct(filterProduct)
  }, [])

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto p-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


          <div>
            < Image src={`${product?.image}`} height={1000} width={1000} alt='img not found'/>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {/* <img src="/thumb1.jpg" className="rounded shadow" />
          <img src="/thumb2.jpg" className="rounded shadow" />
          <img src="/thumb3.jpg" className="rounded shadow" /> */}
            </div>
          </div>


          <div>
            <h1 className="text-3xl font-semibold">Dell PowerEdge T150 Tower Server</h1>
            <div className="flex flex-wrap gap-3 mt-3 text-sm">
              <span className="bg-gray-100 px-3 py-1 rounded-full">Product Code: 23327</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">In Stock</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Brand: Dell</span>
            </div>

            <div className="mt-6">
              <p className="text-3xl font-bold text-red-600">৳ 235,000</p>
              <p className="line-through text-gray-500 mt-1">৳ 250,000</p>
              <p className="text-sm text-green-500 mt-1">Save ৳15,000 (6%)</p>
            </div>

            <ul className="mt-6 space-y-2 text-sm">
              <li><strong>Processor:</strong> Intel Xeon E-2334, 4C/8T, 3.4GHz</li>
              <li><strong>Memory:</strong> 16GB DDR4 3200MT/s ECC</li>
              <li><strong>Storage:</strong> 3.5” chassis, supports up to 4 drives</li>
              <li><strong>RAID:</strong> PERC H355 (RAID 0,1,10)</li>
            </ul>

            <div className="mt-8  rounded-md p-5  ">
              <p className="text-lg font-semibold mb-4">Payment Options</p>
              <div className="flex flex-col lg:flex-row gap-4">
                <label className="flex items-center gap-3 border p-3 rounded-md cursor-pointer w-full">
                  <input type="radio" name="payment" />
                  <div>
                    <p className="font-bold">৳ 235,000</p>
                    <p className="text-xs text-gray-500">Online / Cash Payment</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 border p-3 rounded-md cursor-pointer w-full">
                  <input type="radio" name="payment"  />
                  <div>
                    <p className="font-bold">৳ 20,833/month</p>
                    <p className="text-xs text-gray-500">0% EMI for 12 months</p>
                  </div>
                </label>
              </div>

              <div className="flex gap-x-3">
                <div className="flex items-center mt-4 gap-3">
                  <button disabled={count <= 1} onClick={(() => setcount(count - 1))} className="bg-gray-100 px-3 py-1 rounded cursor-pointer border border-[#8a8a8a3f]">-</button>
                  <span className=''>{count}</span>
                  <button onClick={(() => setcount(count + 1))} className="bg-gray-100 px-3 py-1 rounded cursor-pointer border border-[#8a8a8a3f]">+</button>
                </div>

                <button className=" bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 mt-5 rounded-md text-lg font-medium">Buy Now</button>
              </div>
            </div>
          </div>

        </div>


        <div className="bg-white p-6 rounded-lg shadow-md">
  {/* Tabs */}
  <div className="flex space-x-4 border-b pb-3 mb-6">
  <button className={`px-4 py-1 rounded font-semibold ${active === 0 ? "bg-red-600 text-white" : "text-gray-600 hover:text-red-600"} cursor-pointer`} onClick={() => setactive(0)}>
    Specification
  </button>
  <button className={`px-4 py-1 rounded font-semibold ${active === 1 ? "bg-red-600 text-white" : "text-gray-600 hover:text-red-600"} cursor-pointer`} onClick={() => setactive(1)}>
    Description
  </button>
  <button className={`px-4 py-1 rounded font-semibold ${active === 2 ? "bg-red-600 text-white" : "text-gray-600 hover:text-red-600"} cursor-pointer`} onClick={() => setactive(2)}>
    Questions (0)
  </button>
  <button className={`px-4 py-1 rounded font-semibold ${active === 3 ? "bg-red-600 text-white" : "text-gray-600 hover:text-red-600"} cursor-pointer hidden md:block`} onClick={() => setactive(3)}>
    Reviews (0)
  </button>
</div>


  {/* Specification Title */}
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specification</h2>

  {/* Basic Information */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold bg-blue-100 px-4 py-2 rounded-t text-blue-800">Basic Information</h3>
    <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
      <tbody>
        <tr className="border-b"><td className="p-3 font-medium">Processor</td><td className="p-3">Intel Xeon E-2334 3.4GHz, 8M Cache, 4C/8T, Turbo (65W), 3200 MT/s</td></tr>
        <tr className="border-b"><td className="p-3 font-medium">Memory</td><td className="p-3">16GB UDIMM, 3200MT/s, ECC</td></tr>
        <tr className="border-b"><td className="p-3 font-medium">Hard Disk</td><td className="p-3">2 x 2TB Hard Drive SATA 6G 7.2K 3.5in Cabled</td></tr>
        <tr className="border-b"><td className="p-3 font-medium">RAID Controller</td><td className="p-3">PERC H355 Adapter FH (RAID levels 0, 1, 10)</td></tr>
        <tr className="border-b"><td className="p-3 font-medium">Operating System</td><td className="p-3">Without Operating System</td></tr>
        <tr className="border-b"><td className="p-3 font-medium">Chasis</td><td className="p-3">3.5" Chassis with up to 4 Hard Drives (SAS/SATA)</td></tr>
        <tr className="border-b"><td className="p-3 font-medium">Network</td><td className="p-3">On-Board Broadcom 5720 Dual Port 1Gb LOM</td></tr>
        <tr><td className="p-3 font-medium">Embedded System Management</td><td className="p-3">iDRAC9, Basic 15G</td></tr>
      </tbody>
    </table>
  </div>

  {/* Additional Features */}
  <div className="mb-6">
    <h3 className="text-lg font-semibold bg-blue-100 px-4 py-2 rounded-t text-blue-800">Additional Features</h3>
    <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
      <tbody>
        <tr className="border-b"><td className="p-3 font-medium">Optical Drive</td><td className="p-3">DVD+/-RW, SATA, Internal</td></tr>
        <tr><td className="p-3 font-medium">Power Supply</td><td className="p-3">Power Cords Power Cord: C13, 2M, 250V, 10A (UK, Malaysia, Singapore, HK, Brunei, DDD)</td></tr>
      </tbody>
    </table>
  </div>

  {/* Warranty */}
  <div>
    <h3 className="text-lg font-semibold bg-blue-100 px-4 py-2 rounded-t text-blue-800">Manufacture Warranty</h3>
    <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
      <tbody>
        <tr><td className="p-3 font-medium">Warranty</td><td className="p-3">03 years warranty</td></tr>
      </tbody>
    </table>
  </div>
</div>

      </div>
      <Footer />
    </>
  )
}

export default Page