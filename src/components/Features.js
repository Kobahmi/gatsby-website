import React from "react";
import Image1 from "../assets/images/car1.jpg";
import Image2 from "../assets/images/car2.jpg";
import Image3 from "../assets/images/car3.jpg";
import Image4 from "../assets/images/car4.jpg";

const Features = () => {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[800px] h-screen w-screen bg-slate-900 text-white">
      <h1
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        className=" md:text-3xl lg:text-5xl xl:text-6xl"
      >
        See Autoroot in Action
      </h1>
      <p
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
        className="p-10"
      >
        Instant pricing. Express checkout. Home delivery.
      </p>
      <div data-aos="fade-up" className="flex gap-4 ">
        <div className="relative rounded w-[25rem] h-[40rem] overflow-hidden">
          <button className="text-lg hover:bg-slate-200 rounded-full text-black p-5 bg-white z-10 absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Build & Customize
          </button>
          <img
            className=" w-[25rem] h-[40rem] hover:scale-110 transition duration-300 ease-in-out"
            src={Image1}
            alt=""
          />
        </div>
        <div className="relative rounded w-[25rem] h-[40rem] overflow-hidden">
          <button className="text-lg hover:bg-slate-200 rounded-full text-black p-5 bg-white z-10 absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Shop Pre-Owned
          </button>
          <img
            className=" w-[25rem] h-[40rem] hover:scale-110 transition duration-300 ease-in-out"
            src={Image2}
            alt=""
          />
        </div>
        <div className="relative rounded w-[25rem] h-[40rem] overflow-hidden">
          <button className="text-lg hover:bg-slate-200 rounded-full text-black p-5 bg-white z-10 absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            100% Online
          </button>
          <img
            className=" w-[25rem] h-[40rem] hover:scale-110 transition duration-300 ease-in-out"
            src={Image3}
            alt=""
          />
        </div>
        <div className="relative rounded w-[25rem] h-[40rem] overflow-hidden">
          <button className="text-lg hover:bg-slate-200 rounded-full text-black p-5 bg-white z-10 absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Become a Dealer
          </button>
          <img
            className=" w-[25rem] h-[40rem] hover:scale-110 transition duration-300 ease-in-out"
            src={Image4}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
