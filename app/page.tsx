import FeaturedCategory from '@/components/FeaturedCategory'
import Hero from '@/components/Hero'
import CategoryNav from '@/components/Layouts/CategoryNav'
import Header from '@/components/Layouts/Header'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Header />
      <CategoryNav/>
       <Hero/>
       <FeaturedCategory/>
    </div>
  )
}

export default HomePage