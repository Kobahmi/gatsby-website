import React from "react";
import Video from "../assets/videos/space.mp4";
import Header from "../components/Header";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-screen">
      <Header />
      <div className="z-10 flex flex-col gap-2 absolute text-center top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1
          data-aos="fade-up"
          className="md:text-3xl lg:text-5xl xl:text-6xl font-bold whitespace-nowrap"
        >
          Efficient Software Services
        </h1>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
          className="flex flex-col gap-2"
        >
          <p className="w-full">
            We offer customers the ability to buy cars online and much more.
            Autoroot's modern platform is simple and easy to use.
          </p>
          <button className="m-auto bg-sky-700 hover:bg-sky-800 duration-300 ease-in-out p-2 rounded text-xl font-bold">
            Explore
          </button>
        </div>
      </div>
      <h2 className="z-10 absolute text-2xl font-bold bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-200">
        Trusted by Everyone
      </h2>
      <div className="absolute h-screen w-screen bg-slate-900 bg-opacity-40"></div>
      <video
        className="object-cover h-screen w-screen pointer-events-none"
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
