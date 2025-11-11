import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Spinner from "../../Components/Spinner/Spinner";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";

const UpdateHabit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);
  //   primary data form e thakbe
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    imageURL: "",
  });
  // habite er id soho anlam
  useEffect(() => {
    fetch(`http://localhost:3000/habits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
        setFormData({
          title: data.title,
          description: data.description,
          category: data.category,
          imageURL: data.imageURL || "",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Eror:", err);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/habits/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "😊 Your Habit info has been Updated!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/my-habits");
      })
      .catch((err) => {
        console.error("error to update :", err);
      });
  };

  if (loading || !habit) return <Spinner />;

  return (
    <div className="min-h-screen  px-4 py-12 flex items-center justify-center">
      <AnimatedBackground src="https://lottie.host/74df5d92-1d3d-4988-89ab-a4e2781f6fef/ljHYmPbE7e.lottie" />
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
          ✏️ Update Habit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter habit title"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your habit"
              className="textarea textarea-bordered w-full"
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Morning">Morning</option>
                <option value="Work">Work</option>
                <option value="Play">Play</option>
                <option value="Fitness">Fitness</option>
                <option value="Evening">Evening</option>
                <option value="Study">Study</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL 
              </label>
              <input
                type="text"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                placeholder="https://..."
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="text-sm text-gray-500 mt-2">
            <span className="font-semibold text-gray-700">User:</span>{" "}
            {habit.user?.name} ({habit.user?.email})
          </div>

          <button
            type="submit"
            className="btn bg-purple-600 hover:bg-purple-700 text-white w-full mt-6"
          >
            ✅ Update Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateHabit;
