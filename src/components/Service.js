import React from "react";
import { BsGraphUp } from "@react-icons/all-files/bs/BsGraphUp";
import { BsClockHistory } from "@react-icons/all-files/bs/BsClockHistory";

const Service = () => {
  return (
    <section className="relative min-h-[640px] max-h-[50vh] w-screen">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        <h1 data-aos="fade-up" className="md:text-3xl lg:text-5xl xl:text-6xl">
          Improve Rentability
        </h1>
      </div>
      <div className="flex w-full justify-around absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        <div className="text-center w-96">
          <div data-aos="fade-up">
            <h1 className="text-emerald-300 flex gap-3 md:text-3xl lg:text-5xl xl:text-6xl">
              87% increase <BsGraphUp className="h-16 w-16" />
            </h1>
            <h3 className="text-3xl text-left">in client satisfaction</h3>
          </div>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="text-left text-xl pt-7"
          >
            Autoroot partners rate the platform 87% higher than the industry
            average.
          </p>
        </div>
        <div className="text-center w-96">
          <div data-aos="fade-up">
            <h1 className="text-emerald-300 flex gap-3 md:text-3xl lg:text-5xl xl:text-6xl">
              76% increase <BsClockHistory className="h-16 w-16 " />
            </h1>
            <h3 className="text-3xl text-left">in productivity</h3>
          </div>
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
            className="text-left text-xl pt-7"
          >
            Our simple and modern design enables partners to sell 76% more cars
            than the industry average every month.
          </p>
        </div>
      </div>
      <button className="m-auto bg-sky-700 hover:bg-sky-800 duration-300 ease-in-out p-2 rounded text-xl font-bold absolute bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        Sign up
      </button>
      <div className="absolute min-h-[640px] h-[50vh] w-screen bg-slate-900 "></div>
    </section>
  );
};

export default Service;
