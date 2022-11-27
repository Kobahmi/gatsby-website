import React from "react";
import Video from "../assets/videos/space.mp4";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-screen bg-blue-50">
      <Header />
      <div className="flex flex-col gap-2 absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <div className="text-4xl font-bold">Efficient Software Services</div>
        <button className="m-auto bg-sky-700 hover:bg-sky-800 duration-300 ease-in-out p-2 rounded text-xl font-bold">
          Explore
        </button>
      </div>
      <div className="absolute text-2xl font-bold bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-200">
        Trusted by Everyone
      </div>
      <video
        className="object-cover h-screen w-screen"
        src={Video}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default Hero;
