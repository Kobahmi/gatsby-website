import React from "react";
import Background from "../assets/images/background.jpg";

const Signup = () => {
  return (
    <section className="relative min-h-[640px] max-h-[50vh] w-screen">
      <form className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
        Form here
      </form>
      <div className="absolute min-h-[640px] h-[50vh] w-screen bg-slate-900 bg-opacity-50"></div>
      <img
        className="object-cover min-h-[640px] h-[50vh] w-screen pointer-events-none"
        src={Background}
        alt=""
      />
    </section>
  );
};

export default Signup;
