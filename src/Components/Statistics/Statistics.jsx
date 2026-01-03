import React, { useEffect, useState } from "react";

const Statistics = () => {
  const [stats, setStats] = useState({ totalHabits: 0, totalUsers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_BASE; // ✅ .env থেকে নাও
    fetch(`${API_BASE}/stats`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Failed to fetch stats:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading statistics...</p>;
  }

  return (
    <section className="py-12 px-6 bg-base-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Platform Statistics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="text-4xl font-bold text-green-600">
              {stats.totalHabits}
            </p>
            <p className=" mt-2">Total Habits Created</p>
          </div>
          <div className="bg-base-200 shadow rounded-lg p-6">
            <p className="text-4xl font-bold text-blue-600">
              {stats.totalFeedback}
            </p>
            <p className=" mt-2">Total Feedback</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
