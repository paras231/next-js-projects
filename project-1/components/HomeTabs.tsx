import React from "react";
import { FaPlaneDeparture, FaHotel } from "react-icons/fa";
const HomeTabs = () => {
  return (
    <>
      <section className="container mx-auto px-4  shadow-xl rounded-md  mt-6">
        <div className="container flex justify-between">
          <div className="font-bold flex flex-col gap-2">
            <FaPlaneDeparture className="ml-3 " />
            <span className="hover:text-blue-700">Flight</span>
          </div>
          <div className="font-bold flex flex-col hover:text-blue-500 gap-2 cursor-pointer">
            <FaHotel className="ml-3 hover:text-blue-500" />
            <span className="hover:text-blue-700">Hotels</span>
          </div>
          <div className="font-bold">Flights</div>
          <div className="font-bold">Flights</div>
        </div>
      </section>
    </>
  );
};

export default HomeTabs;
