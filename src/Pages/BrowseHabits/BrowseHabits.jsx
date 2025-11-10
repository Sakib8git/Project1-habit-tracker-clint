import React, { useState, useEffect } from "react";
import HabbitCard from "../../Components/Cards/HabbitCard";
import Spinner from "../../Components/Spinner/Spinner";
import { useLoaderData } from "react-router";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";

const BrowseHabits = () => {
  const data = useLoaderData(); // 10 habit objects
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background animation */}
      <AnimatedBackground src="https://lottie.host/74df5d92-1d3d-4988-89ab-a4e2781f6fef/ljHYmPbE7e.lottie" />

      {/* Foreground content */}
      <div className="relative z-10 px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          All Habits
        </h2>
        {loading ? <Spinner /> : <HabbitCard habits={data} />}
      </div>
    </div>
  );
};

export default BrowseHabits;