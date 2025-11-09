import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Track Your Habits Effortlessly",
    subtitle: "Build consistency with daily goals and visual progress.",
    image: "https://source.unsplash.com/1600x600/?productivity,calendar",
  },
  {
    id: 2,
    title: "Stay Motivated Every Day",
    subtitle: "Get reminders, streaks, and rewards for staying on track.",
    image: "https://source.unsplash.com/1600x600/?motivation,success",
  },
  {
    id: 3,
    title: "Your Personal Habit Dashboard",
    subtitle: "Customize your routine and monitor growth over time.",
    image: "https://source.unsplash.com/1600x600/?dashboard,analytics",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // auto-slide every 5s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden rounded-3xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Manual navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
