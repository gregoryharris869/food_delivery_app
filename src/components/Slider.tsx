import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Text Container */}
      <div className="h-1/2">
        <h1>Test</h1>
        <button>Order Now</button>
      </div>
      {/* Image Container */}
      <div className="h-1/2 w-full relative">
        <Image src="/slide1.png" alt="Man with pizza." fill />
      </div>
    </div>
  );
};

export default Slider;
