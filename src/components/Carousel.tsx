"use client"
import Image from "next/image";
import { useState } from "react";

const slides = [
  { id: 1, image: "/carousel-image/gambar3.png", alt: "Promo 1" },
  { id: 2, image: "/carousel-image/gambar2.png", alt: "Promo 2" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg group mt-36">
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
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={prevSlide}
      >
        <Image src={'/assets/icons/arrow-left.svg'} width={24} height={24} alt={'arrow-left'}/>
      </button>
      <button
        className=" absolute top-1/2 right-1 transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow hover:shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={nextSlide}
      >
        <Image src={'/assets/icons/arrow-right.svg'} width={24} height={24} alt={'arrow-left'}/>
      </button>
    </div>
  );
}
