import React from "react";
import { useNavigate } from "react-router";
import './Button.css';
const habits = [
  {
    id: 1,
    title: "Morning Meditation",
    description: "Start your day with 10 minutes of mindfulness.",
    creator: "Ayesha",
    color: "from-green-400 to-green-600",
  },
  {
    id: 2,
    title: "Drink Water",
    description: "Stay hydrated by drinking 8 glasses daily.",
    creator: "Rafi",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 3,
    title: "Read Books",
    description: "Read at least 20 pages every day.",
    creator: "Tanvir",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 4,
    title: "Workout",
    description: "Exercise for 30 minutes to stay fit.",
    creator: "Public",
    color: "from-red-400 to-red-600",
  },
  {
    id: 5,
    title: "Sleep Early",
    description: "Go to bed before 11 PM for better rest.",
    creator: "Public",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    id: 6,
    title: "Journal",
    description: "Write down your thoughts and goals daily.",
    creator: "Ayesha",
    color: "from-pink-400 to-pink-600",
  },
];

const HabbitCard = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    // Redirect to habit details page (login required)
    navigate(`/habits/${id}`);
  };

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Featured Habits
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className={`m-2 group px-10 py-5 bg-white/20 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-lime-400 z-20 shadow-xl after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all w-80`}
          >
            <div
              className={`w-32 h-32 rounded-full bg-gradient-to-r ${habit.color} p-2 transition-all duration-300 group-hover:-translate-y-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
            ></div>
            <p className="font-semibold text-gray-800 tracking-wider group-hover:text-gray-900 text-xl">
              {habit.title}
            </p>
            <p className="font-semibold text-gray-600 text-xs text-center group-hover:text-gray-800">
              {habit.description}
            </p>
            <p className="text-xs text-gray-500 italic group-hover:text-gray-700">
              Creator: {habit.creator}
            </p>
            <button onClick={() => handleViewDetails(habit.id)} className="btnCus">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HabbitCard;
