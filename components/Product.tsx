import { ProductData } from '@/productData'
import React from 'react'
import ProductCard from './ProductCard'

type Props = {}

const Product = (props: Props) => {
  return (
    <div className='mt-12 1300:w-[1297px] mx-auto p-2'>
      <h1 className='text-center font-bold text-[20px] leading-[26px]'>Featured Category</h1>
      <h5 className='mt-2 text-center text-[#444]'>Get Your Desired Product from Featured Category!</h5>
      <div className="mt-5 ml-3 md:ml-0 w-[90%] md:w-full  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-items-center">
        {
          ProductData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        }
      </div>


    </div>
  )
}

export default Product