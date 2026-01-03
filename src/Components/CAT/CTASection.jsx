import React, { useContext } from "react";
import { Link } from "react-router"; 
import { AuthContext } from "../../AuthContext/AuthContext";

const CTASection = () => {
  const { user } = useContext(AuthContext);

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Better Habits?
        </h2>

        {/* Description */}
        <p className="text-lg mb-8">
          Join thousands of people already tracking their daily progress. Start
          your journey today and make positive changes that last.
        </p>

        {/* ✅ Conditional CTA Button */}
        {user ? (
          <Link
            to="/dashboard/add-habit"
            className="inline-block bg-green-500 text-white hover:bg-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Add Your First Habit
          </Link>
        ) : (
          <Link
            to="/login"
            className="inline-block bg-green-500 text-white hover:bg-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Get Started Free
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;