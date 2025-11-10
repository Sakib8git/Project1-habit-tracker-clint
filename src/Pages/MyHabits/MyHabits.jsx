import React, { useEffect, useState, useContext } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import { AuthContext } from "../../AuthContext/AuthContext";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-habits?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Failed to fetch habits:", error);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <AnimatedBackground src="https://lottie.host/74df5d92-1d3d-4988-89ab-a4e2781f6fef/ljHYmPbE7e.lottie" />
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Habits
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full bg-white">
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Current Streak</th>
                  <th className="py-3 px-4 text-left">Created Date</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {habits.map((habit) => (
                  <tr key={habit._id}>
                    <td className="py-3 px-4">{habit.title}</td>
                    <td className="py-3 px-4">{habit.category}</td>
                    <td className="py-3 px-4">{habit.currentStreak} days</td>
                    <td className="py-3 px-4">
                      {new Date(habit.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-center space-x-2">
                      <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-full">
                        Update
                      </button>
                      <button className="btn btn-sm bg-red-500 text-white hover:bg-red-600 rounded-full">
                        Delete
                      </button>
                      <button className="btn btn-sm bg-green-500 text-white hover:bg-green-600 rounded-full">
                        Mark Complete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyHabits;
