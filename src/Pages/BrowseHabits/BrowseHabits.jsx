import React, { useState, useEffect } from "react";
import HabbitCard from "../../Components/Cards/HabbitCard";
import Spinner from "../../Components/Spinner/Spinner";
import { useLoaderData } from "react-router"; // ✅ react-router-dom ব্যবহার করো
import { ScrollFadeUp } from "../../Components/AnimatedBackground/ScrollFadeUp";

// --------------------------------------------------
// category Array
const categories = ["All", "Morning", "Work", "Fitness", "Evening", "Study"];

const BrowseHabits = () => {
  const data = useLoaderData(); // ✅ loader থেকে JSON আসবে
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    setLoading(true);
    const API_BASE = import.meta.env.VITE_API_BASE; // ✅ .env থেকে base URL নাও

    fetch(`${API_BASE}/habits?page=${page}&limit=6`)
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

  const sourceHabits = Array.isArray(data) ? data : habits;

  const filteredHabits = sourceHabits.filter((habit) => {
    const matchesCategory =
      selectedCategory === "All" || habit.category === selectedCategory;
    const matchesSearch =
      habit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      habit.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden container mx-auto">
        <title>Habit-Tracker: Public Habits</title>

        <div className="relative z-10 px-6 py-12">
          <h2 className="text-3xl font-bold text-center text-base-800 mb-10">
            All Habits
          </h2>

          {/* Search + Category */}
          <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="text"
              placeholder="Search habits..."
              className="input input-bordered w-full sm:w-1/2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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

          {/* ✅ Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              className="btn btn-sm"
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`btn btn-sm ${
                  page === i + 1 ? "btn-primary" : "btn-outline"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="btn btn-sm"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseHabits;