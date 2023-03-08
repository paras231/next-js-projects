import React, { useState } from "react";
import { FaPlaneDeparture, FaHotel } from "react-icons/fa";
import { BiTrain } from "react-icons/bi";


const HomeTabs = () => {
  return (
    <>
      {/* tab 1 component */}
      <section className="container mx-auto px-4  shadow-xl rounded-md  mt-6">
        <div className="container flex justify-between">
          <div className="font-bold flex flex-col hover:text-blue-500 gap-2 cursor-pointer">
            <FaPlaneDeparture className="ml-3 hover:text-blue-500" />
            <span className="hover:text-blue-700">Flights</span>
          </div>
          <div className="font-bold flex flex-col hover:text-blue-500 gap-2 cursor-pointer">
            <FaHotel className="ml-3 hover:text-blue-500" />
            <span className="hover:text-blue-700">Hotels</span>
          </div>
          <div className="font-bold flex flex-col hover:text-blue-500 gap-2 cursor-pointer">
            <BiTrain className="ml-3 hover:text-blue-500" />
            <span className="hover:text-blue-700">Trains</span>
          </div>
          <div className="font-bold flex flex-col hover:text-blue-500 gap-2 cursor-pointer">
            <FaHotel className="ml-3 hover:text-blue-500" />
            <span className="hover:text-blue-700">Holidays</span>
          </div>
        </div> 
      </section>
      <SlidingTabs />
    </>
  );
};

export default HomeTabs;

export const SlidingTabs = () => {
  return (
    <>
    
      
    </>
  );
};

// https://jsonplaceholder.typicode.com/posts