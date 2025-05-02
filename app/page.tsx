import FeaturedCategory from '@/components/FeaturedCategory'
import Hero from '@/components/Hero'
import HomeDescription from '@/components/HomeDescription'
import BottomNav from '@/components/Layouts/ButtomNav'
import CategoryNav from '@/components/Layouts/CategoryNav'
import Footer from '@/components/Layouts/Footer'
import Header from '@/components/Layouts/Header'
import Product from '@/components/Product'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Header />
      <CategoryNav/>
       <Hero/>
       <FeaturedCategory/>
        <Product/>
         <HomeDescription/>
         <Footer/>
         <BottomNav/>
    </div>
  )
}

export default HomePage