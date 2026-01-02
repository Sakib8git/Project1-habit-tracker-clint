import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthContext/AuthContext";

import Spinner from "../../Components/Spinner/Spinner";
import AddAnimation from "../../Components/AnimatedBackground/AddAnimation";

const AddHabit = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const habitData = {
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      reminderTime: form.reminderTime.value,
      imageURL: form.imageURL.value || "",
      isPublic: true,
      user: {
        uid: user?.uid,
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
      },
      currentStreak: 0,
      completionHistory: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const API_BASE = import.meta.env.VITE_API_BASE;

    fetch(`${API_BASE}/habits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habitData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("✅ Habit added successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        form.reset();
      })
      .catch(() => {
        toast.error("❌ Failed to add habit", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className=" relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-10">
      <title> Habit-Tracker: Add-Habits</title>
      {/* anim */}
      <AddAnimation
        src="https://lottie.host/25c6467c-9e17-4bf7-82ef-07cc13eb97e4/Tq3sxNL4yN.lottie"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 w-full max-w-xl ">
        {loading ? (
          <Spinner />
        ) : (
          <div className="card border border-gray-200 bg-base-100 shadow-2xl rounded-2xl">
            <div className="card-body p-6">
              <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
                Add New Habit
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="label font-medium">Habit Title</label>
                  <input
                    type="text"
                    name="title"
                    required
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    placeholder="e.g. Morning Meditation"
                  />
                </div>
                {/* ------------------------------------------------------------------- */}
                {/* descrip */}
                <div>
                  <label className="label font-medium">Description</label>
                  <textarea
                    name="description"
                    required
                    rows="3"
                    className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]"
                    placeholder="Describe your habit..."
                  ></textarea>
                </div>
                {/* ------------------------------------------------------------------- */}
                {/* cat dropdown */}
                <div>
                  <label className="label font-medium">Category</label>
                  <select
                    defaultValue={""}
                    name="category"
                    required
                    className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="Morning">Morning</option>
                    <option value="Work">Work</option>
                    <option value="play">Play</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Evening">Evening</option>
                    <option value="Study">Study</option>
                  </select>
                </div>
                {/* ------------------------------------------------------------------- */}
                {/*time */}
                <div>
                  <label className="label font-medium">Reminder Time</label>
                  <input
                    type="time"
                    name="reminderTime"
                    required
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="label font-medium">Image URL</label>
                  <input
                    type="url"
                    name="imageURL"
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    placeholder="https://i.ibb.co/your-image.png"
                  />
                </div>
                {/* ------------------------------------------------------------------- */}
                {/* User Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label font-medium">User Name</label>
                    <input
                      type="text"
                      value={user?.displayName || ""}
                      readOnly
                      className="input w-full rounded-full bg-gray-100 text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="label font-medium">User Email</label>
                    <input
                      type="email"
                      value={user?.email || ""}
                      readOnly
                      className="input w-full rounded-full bg-gray-100 text-gray-500"
                    />
                  </div>
                </div>
                {/* ------------------------------------------------------------------- */}

                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                >
                  Add Habit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddHabit;
