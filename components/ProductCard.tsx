import Link from 'next/link'
import React from 'react'

type Props = {
  product: any
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`} className=' h:[ 200px ] min-h-[310px] md:w-[252px] md:h-[388px] rounded-md bg-white shadow-sm cursor-pointer'>
      <span className='bg-[#6e2594] inline-block py-0.5 text-white text-sm mt-5 px-3 rounded-r-full shadow-2xl '>Save : 9,200 <span className='text-[14px] font-extrabold'>৳ </span>(-17%)</span>
      <img src={product.image} className='object-cover mx-auto mt-1.5 ' alt="" />
      <div className="border-t border-[#cac7c757]"></div>

      <div className="mt-1 flex justify-between flex-col">
        <h1 className='text-[#111] p-3 font-semibold'>{product.name}</h1>

        <div className="flex gap-x-4 p-3">
          <h1 className='text-red-500 font-bold'>{product.price} <span className='text-[16px] font-extrabold'>৳</span> </h1>
          <span className="  text-gray-500 line-through">{product.eistmatatedProce} <span className='text-[16px] font-extrabold'>৳</span></span>
        </div>
      </div>


    </Link>
  )
}

export default ProductCard