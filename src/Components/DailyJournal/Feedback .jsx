import React, { useState } from "react";
import Swal from "sweetalert2"; // ✅ SweetAlert2 import

const Feedback = () => {
  const [entry, setEntry] = useState("");
  const [mood, setMood] = useState("🙂");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, mood, entry };
    const API_BASE = import.meta.env.VITE_API_BASE;

    try {
      const res = await fetch(`${API_BASE}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Saved:", data);

      setEntry("");
      setMood("🙂");
      setName("");

      // ✅ SweetAlert success popup
      Swal.fire({
        icon: "success",
        title: "Thank you!",
        text: "🌸 Your feedback has been received with gratitude.",
        confirmButtonColor: "#84cc16", // lime-500
      });
    } catch (err) {
      // ✅ SweetAlert error popup
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "❌ Failed to send feedback. Please try again!",
        confirmButtonColor: "#ef4444", // red-500
      });
    }
  };

  return (
    <section className="py-12 px-6 ">
      <h2 className="text-3xl font-bold text-center  mb-6">
        Share Your Feedback
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-base-200 p-6 rounded-xl shadow-md"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-base-700 font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
        </div>

        {/* Mood Selector */}
        <div className="mb-4">
          <label className="block text-base-700 font-semibold mb-2">
            How was your experience today?
          </label>
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option>🙂 Happy</option>
            <option>😐 Neutral</option>
            <option>😞 Sad</option>
            <option>😤 Frustrated</option>
            <option>😎 Satisfied</option>
          </select>
        </div>

        {/* Feedback Textarea */}
        <div className="mb-4">
          <label className="block text-base-700 font-semibold mb-2">
            Leave your comments or suggestions
          </label>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows="5"
            placeholder="What did you like? What could be improved?"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white hover:bg-green-600 font-semibold py-2 px-4 rounded-lg transition-all"
        >
          Send Your Feedback
        </button>
      </form>
    </section>
  );
};

export default Feedback;