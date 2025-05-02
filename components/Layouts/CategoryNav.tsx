"use client"
import React, { useEffect, useState } from 'react';

const categories = [
  'Desktop',
  'Laptop',
  'Monitor',
  'UPS',
  'Phone',
  'Tablet',
  'Office Equipment',
  'Camera',
  'Security',
  'Networking',
  'Software',
  'Server & Storage',
  'Accessories',
  'Output',
  'Gaming',
  'TV',
  'Appliance'
];

const CategoryNav = () => {
  const [active, setActive] = useState(false)
      useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > 100) {
              setActive(true);
            } else {
              setActive(false);
            }
          };
               window.addEventListener("scroll", handleScroll);
                  return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }, []); // 
  return (
    <div className={`bg-white shadow-sm w-full z-10 ${active && "fixed top-0 left-0"}`}>
      <div className=" mx-auto px-4 py-4 hidden 1300:block 1300:w-[1297px]">
        <div className="flex space-x-5 whitespace-nowrap">
          {categories.map((category, index) => (
            <a 
              key={index}
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;