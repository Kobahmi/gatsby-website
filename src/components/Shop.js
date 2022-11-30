import React from "react";
import Image from "../assets/images/meeting.jpg";

const Shop = () => {
  return (
    <section className="relative min-h-[640px] max-h-[50vh] w-screen">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        <h1
          data-aos="fade-down"
          className="md:text-3xl lg:text-5xl xl:text-6xl"
        >
          Discover the Best Options
        </h1>
      </div>
      <div className="flex items-center gap-10 z-10 absolute text-2xl font-bold top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-200">
        <button
          data-aos="fade-up"
          className="hover:bg-slate-200 p-6 rounded-full bg-white text-black"
        >
          SHOP OUR DEALERS
        </button>
        <button data-aos="fade-up" className="hover:underline">
          See testimonials
        </button>
      </div>
      <div className="absolute min-h-[640px] h-[50vh] w-screen bg-gray-900 bg-opacity-60"></div>
      <img
        className="object-cover min-h-[640px] h-[50vh] w-screen pointer-events-none"
        src={Image}
        alt="shop"
      />
    </section>
  );
};

export default Shop;
