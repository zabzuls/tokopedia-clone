"use client"
import Image from "next/image";
import { useState } from "react";
import {slides} from "../app/api/Carousel";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-[1208px] h-[302px] overflow-hidden rounded-lg group mt-36 mx-auto">
      {slides.map((slide, index) => (
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.alt}
          width={200}
          height={200}
          className={`absolute w-full h-full object-cover transition-transform ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          }`}
        />
      ))}
      <button
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-50"
        onClick={prevSlide}
      >
        <Image src={'/assets/icons/arrow-left.svg'} width={24} height={24} alt={'arrow-left'}/>
      </button>
      <button
        className=" absolute top-1/2 right-1 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-50"
        onClick={nextSlide}
      >
        <Image src={'/assets/icons/arrow-right.svg'} width={24} height={24} alt={'arrow-left'}/>
      </button>
    </div>
  );
}
