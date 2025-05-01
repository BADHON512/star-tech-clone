// components/CategoryNav.tsx
import React from 'react';

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
  return (
    <div className="bg-white shadow-sm ">
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