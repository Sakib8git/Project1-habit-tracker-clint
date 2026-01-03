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

    const API_URL = `https://habit-tracker-server-teal.vercel.app/my-habits?email=${user.email}`;

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

  // ✅ Dynamic counts
  const habitsCreated = habits.length;

  // ✅ Chart data (habit title vs streak)
  const chartData = habits.map((habit) => ({
    title: habit.title,
    streak: habit.currentStreak || 0,
  }));

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-base-300 via-base to-base-100 px-4 py-8">
      {/* Profile Card */}
      <div className="bg-base shadow-xl rounded-2xl p-8 w-full max-w-md relative overflow-hidden mb-8">
        {/* Avatar */}
        <div className="relative flex flex-col items-center">
          <img
            src={user?.photoURL || "https://i.ibb.co/2FsfXqM/default-avatar.png"}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-primary shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-base-800">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-base-500 text-sm">{user?.email}</p>
        </div>

        {/* Stats Section */}
        <div className="mt-6 text-center">
          <div className="bg-base-200 rounded-lg p-4">
            <p className="text-xl font-bold text-primary">{habitsCreated}</p>
            <p className="text-xs text-base-600">Habits Created</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => logOut()}
            className="btn btn-error text-base flex items-center gap-2"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* ------- Chart Section ---------- */}
      <div className="w-full max-w-3xl h-72 bg-base-200 rounded-xl shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Habit Streaks Overview
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="streak" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Profile;