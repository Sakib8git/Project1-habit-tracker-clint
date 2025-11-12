import React, { useEffect, useState, useContext } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    // email dhorlam----------then token nilam
    fetch(`http://localhost:3000/my-habits?email=${user.email}`, {
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

  // delete kora holo
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
        fetch(`http://localhost:3000/habits/${id}`, {
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
      // habitId dhore / bakend er /complete e Patch kore data update korlam
      const res = await fetch(
        `http://localhost:3000/habits/${habitId}/complete`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail: user.email }),
        }
      );

      const data = await res.json();
      // agee up kora takle eida dekhabe---- vagooooooo
      if (data.alreadyCompleted) {
        Swal.fire(
          "⛔ Already Completed",
          "You’ve already completed this habit today.",
          "info"
        );
        // na thakle kore dao
      } else if (data.success) {
        Swal.fire("✅ Completed!", "Habit marked as complete.", "success");
        // updter korlo--------------------
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
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <title> Habit-Tracker: My-Habits</title>
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
                      <Link
                        to={`/update-habit/${habit._id}`}
                        className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-full"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(habit._id)}
                        className="btn btn-sm bg-red-500 text-white hover:bg-red-600 rounded-full"
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => handleComplete(habit._id)}
                        className="btn btn-sm bg-green-500 text-white hover:bg-green-600 rounded-full"
                      >
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
