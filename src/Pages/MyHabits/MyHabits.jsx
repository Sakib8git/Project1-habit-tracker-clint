import React, { useEffect, useState, useContext } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPen, FaTrash, FaCheck } from "react-icons/fa";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);
  const API_BASE = import.meta.env.VITE_API_BASE;
  useEffect(() => {
    if (!user?.email) return;
    const API_BASE = import.meta.env.VITE_API_BASE;

    fetch(`${API_BASE}/my-habits?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Failed to fetch habits:", error);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This habit will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_BASE}/habits/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              Swal.fire("Deleted!", "Your habit has been removed.", "success");
              setHabits((prev) => prev.filter((h) => h._id !== id));
            }
          })
          .catch((err) => {
            console.error("❌ Failed to delete habit:", err);
          });
      }
    });
  };

  const handleComplete = async (habitId) => {
    try {
      const res = await fetch(
        `${API_BASE}/habits/${habitId}/complete`,

        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || data.error || "Something went wrong.");
        return;
      }

      if (data.alreadyCompleted) {
        toast.info(
          "⛔ Already Completed. You’ve already completed this habit today."
        );
      } else if (data.success) {
        toast.success("✅ Completed! Habit marked as complete.");
        setHabits((prev) =>
          prev.map((h) =>
            h._id === habitId ? { ...h, currentStreak: data.updatedStreak } : h
          )
        );
      }
    } catch (err) {
      console.error("❌ Failed to complete habit:", err);
      Swal.fire("Error", "Could not mark habit complete", "error");
    }
  };

  return (
    <div className="min-h-screen px-2 sm:px-6 lg:px-8 py-8">
      <title>Habit-Tracker: My-Habits</title>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          My Habits
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            {/* ✅ Table for sm+ screens */}
            <div className="hidden sm:block">
              <div className="overflow-x-auto">
                <table className="table w-full min-w-[600px] bg-base-100">
                  <thead className="bg-base-200 text-sm">
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
                      <tr key={habit._id} className="hover:bg-base-200">
                        <td className="py-3 px-4">{habit.title}</td>
                        <td className="py-3 px-4">{habit.category}</td>
                        <td className="py-3 px-4">
                          {habit.currentStreak} days
                        </td>
                        <td className="py-3 px-4">
                          {new Date(habit.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4 text-center space-x-2">
                          <Link
                            to={`/update-habit/${habit._id}`}
                            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-full"
                          >
                            <FaPen className="text-sm" />
                          </Link>
                          <button
                            onClick={() => handleDelete(habit._id)}
                            className="btn btn-sm bg-red-500 text-white hover:bg-red-600 rounded-full"
                          >
                            <FaTrash className="text-sm" />
                          </button>
                          <button
                            onClick={() => handleComplete(habit._id)}
                            className="btn btn-sm bg-green-500 text-white hover:bg-green-600 rounded-full"
                          >
                            <FaCheck className="text-sm" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ✅ Card layout for xs screens */}
            <div className="sm:hidden space-y-4">
              {habits.map((habit) => (
                <div
                  key={habit._id}
                  className="bg-base-100 shadow rounded-lg p-4 flex flex-col gap-2"
                >
                  <h3 className="font-semibold text-lg">{habit.title}</h3>
                  <p className="text-sm text-gray-600">
                    Category: {habit.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    Streak: {habit.currentStreak} days
                  </p>
                  <p className="text-sm text-gray-600">
                    Created: {new Date(habit.createdAt).toLocaleDateString()}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Link
                      to={`/update-habit/${habit._id}`}
                      className="btn btn-xs bg-blue-500 text-white hover:bg-blue-600 rounded-full"
                    >
                      <FaPen />
                    </Link>
                    <button
                      onClick={() => handleDelete(habit._id)}
                      className="btn btn-xs bg-red-500 text-white hover:bg-red-600 rounded-full"
                    >
                      <FaTrash />
                    </button>
                    <button
                      onClick={() => handleComplete(habit._id)}
                      className="btn btn-xs bg-green-500 text-white hover:bg-green-600 rounded-full"
                    >
                      <FaCheck />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyHabits;
