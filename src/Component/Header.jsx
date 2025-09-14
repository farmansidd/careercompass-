import React, { useState } from 'react';
import { MapPin,  SlidersHorizontal,Search } from 'lucide-react';
import BGimg from '../assets/BGimg.jpg';
export default function RealEstateHero() {
const [activeTab, setActiveTab] = useState("New Launch / EOI");
const tabs = [
"Buy",
"Rent",
"Commercial",
"Projects",
];
  return (
    <div className="">
      {/* from-blue-400 via-blue-500 to-blue-600 relative */}
      <div className="absolute inset-0 -z-10 h-screen">
  <img 
    src={BGimg} 
    alt=""  
    className="w-full h-full object-cover" 
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>
</div>

{/* Hero Section Content */}
<div className="flex flex-col items-center justify-center h-screen px-4">
  <p className="text-sm text-white tracking-widest mb-2 mt-[-300px]">
    THE BEST WAY TO FIND
  </p>
  <h1 className="text-5xl font-bold text-white mb-4 text-center mb-[100px]">
    ZERO BROK₹AGE HOMES
  </h1>


   

      {/* Tabs */}
      <div className="bg-white rounded-t-2xl shadow-md flex space-x-6 px-6 pt-3 ml-[-597px] mt-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="bg-white rounded-tr-2xl rounded-b-2xl shadow-md w-full max-w-4xl flex items-center px-4 py-3">
        <MapPin
          className="text-gray-400 mr-2"
          size={20}
          color="currentColor"
        />
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          className="flex-grow focus:outline-none text-sm"
        />
        <button className="flex items-center text-sm text-gray-600 hover:text-black mr-4">
          <SlidersHorizontal
            className="mr-1"
            size={18}
            color="currentColor"
          />
          Advanced
        </button>
        <button className="bg-purple-900 hover:bg-purple-800 text-white rounded-full p-3">
          <Search size={20} color="currentColor" />
        </button>
      </div>
    </div>
    </div>  );
}