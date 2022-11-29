import React from "react";

const Service = () => {
  return (
    <section className="relative h-[50vh] w-screen">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        <h1 data-aos="fade-up" className="md:text-3xl lg:text-5xl xl:text-6xl">
          Improve Rentability
        </h1>

        <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
          <div>77% increase in client satisfaction</div>
          <div>77% increase in productivity</div>
        </div>
      </div>
      <div className="absolute  h-[50vh] w-screen bg-slate-900 "></div>
    </section>
  );
};

export default Service;
