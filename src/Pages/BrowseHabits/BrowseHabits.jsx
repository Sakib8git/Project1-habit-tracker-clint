import React, { useState, useEffect } from "react";
import HabbitCard from "../../Components/Cards/HabbitCard";
import Spinner from "../../Components/Spinner/Spinner";
import { useLoaderData } from "react-router";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import { ScrollFadeUp } from "../../Components/AnimatedBackground/ScrollFadeUp";
// --------------------------------------------------
// category Arry
const categories = ["All", "Morning", "Work", "Fitness", "Evening", "Study"];

const BrowseHabits = () => {
  const data = useLoaderData();
  console.log(data);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [habits, setHabits] = useState([]);
  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 1500);
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://habit-tracker-server-teal.vercel.app/habits?page=${page}&limit=6`
    )
      .then((res) => res.json())
      .then((data) => {
        setHabits(data.habits);
        setTotalPages(Math.ceil(data.total / data.limit));
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch habits:", err);
        setLoading(false);
      });
  }, [page]);

  const filteredHabits = data.filter((habit) => {
    const matchesCategory =
      selectedCategory === "All" || habit.category === selectedCategory;
    const matchesSearch =
      habit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      habit.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen overflow-hidden container mx-auto">
      <title> Habit-Tracker: Public Habits</title>
      <AnimatedBackground src="https://lottie.host/74df5d92-1d3d-4988-89ab-a4e2781f6fef/ljHYmPbE7e.lottie" />

      <div className="relative z-10 px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          All Habits
        </h2>

        {/*  Search kora*/}
        <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Search habits..."
            className="input input-bordered w-full sm:w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* cate diye khojo */}
          <select
            className="select select-bordered w-full sm:w-1/3"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <ScrollFadeUp>
          {loading ? <Spinner /> : <HabbitCard habits={filteredHabits} />}
        </ScrollFadeUp>
      </div>
      
    </div>
  );
};

export default BrowseHabits;
