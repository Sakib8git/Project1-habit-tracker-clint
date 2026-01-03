import React, { useContext, useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthContext";
import Spinner from "../../Components/Spinner/Spinner";

// ✅ Recharts imports
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Profile = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const API_BASE = import.meta.env.VITE_API_BASE;
    const API_URL = `${API_BASE}/my-habits?email=${user.email}`;

    fetch(API_URL, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, [user]);

  if (loading || fetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  const habitsCreated = habits.length;

  // ✅ Chart data (habit title vs streak)
  const chartData = habits.map((habit) => ({
    title: habit.title,
    streak: habit.currentStreak || 0,
  }));

  return (
    <section className="min-h-screen  px-4 py-12 flex flex-col items-center">
      {/* Profile Card */}
      <div className="bg-base-300 shadow-2xl rounded-3xl p-8 w-full max-w-md text-center relative overflow-hidden mb-8">
        {/* Glowing Ring Avatar */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 blur-xl opacity-30 animate-pulse"></div>
          <img
            src={user?.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"}
            alt="User Avatar"
            className="w-full h-full rounded-full border-4 border-white shadow-lg z-10 relative"
          />
        </div>

        {/* Name & Email */}
        <h2 className="text-2xl font-bold ">
          {user?.displayName || "Anonymous User"}
        </h2>
        <p className="text-sm  mb-6">{user?.email}</p>

        {/* Stats */}
        <div className=" rounded-xl py-4 px-6 shadow-inner mb-6">
          <p className="text-3xl font-bold text-green-700">{habitsCreated}</p>
          <p className="text-sm ">Habits Created</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => logOut()}
          className="btn btn-secondary w-full flex justify-center items-center gap-2 text-white font-semibold hover:scale-105 transition-transform"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* ✅ Recharts Section */}
      <div className="w-full max-w-3xl h-72 bg-base-300 rounded-xl shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">
          Habit Streaks Overview
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="streak" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Profile;