import React from "react";
import Background from "../assets/images/background.jpg";

const Signup = () => {
  return (
    <section className="relative min-h-[600px] max-h-[50vh] w-screen">
      <form className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        <h1 className="md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center">
          Modernize Car Shopping with Autoroot
        </h1>
      </form>
      <div className="absolute min-h-[640px] h-[50vh] w-screen bg-slate-900 bg-opacity-50"></div>
      <img
        className="object-cover min-h-[640px] h-[50vh] w-screen"
        src={Background}
        alt=""
      />
    </section>
  );
};

export default Signup;
