import React from "react";
import Video from "../assets/videos/space.mp4";

const Hero = () => {
  return (
    <section className="min-h-screen w-screen bg-blue-50">
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
