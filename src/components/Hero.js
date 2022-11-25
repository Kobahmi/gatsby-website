import React from "react";
import Video from "../assets/videos/space.mp4";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-screen bg-blue-50">
      <Header />
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
