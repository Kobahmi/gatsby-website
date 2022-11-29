import React from "react";
import Image from "../assets/images/meeting.jpg";

const Shop = () => {
  return (
    <section className="relative h-[50vh] w-screen">
      <div className="absolute h-[50vh] w-screen bg-gray-900 bg-opacity-60"></div>
      <img
        className="object-cover h-[50vh] w-screen pointer-events-none"
        src={Image}
        alt="shop"
      />
    </section>
  );
};

export default Shop;
