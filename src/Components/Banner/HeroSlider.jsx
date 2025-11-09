import React, { useState, useEffect } from "react";
import slide2 from "../../assets/2.png";
import slide3 from "../../assets/3.png";
import slide4 from "../../assets/4.png";

const slides = [
  {
    id: 1,
    title: "Track Your Habits Effortlessly",
    subtitle: "Build consistency with daily goals and visual progress.",
    image: slide2,
  },
  {
    id: 2,
    title: "Stay Motivated Every Day",
    subtitle: "Get reminders, streaks, and rewards for staying on track.",
    image: slide3,
  },
  {
    id: 3,
    title: "Your Personal Habit Dashboard",
    subtitle: "Customize your routine and monitor growth over time.",
    image: slide4,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden rounded-3xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-90 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 rounded-3xl z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-purple-800 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Manual navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
