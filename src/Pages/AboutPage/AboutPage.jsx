import React from "react";
import { Link } from "react-router"; // ✅ react-router-dom use korbo

const AboutPage = () => {
  return (
    <section className="bg-base-100  px-6 py-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Built For Movement, Designed For Results
        </h1>
        <p className="text-lg ">
          Habit-Tracker is more than just software—it's your everyday fitness companion.
        </p>
      </div>

      {/* Founder Quote + Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12 items-center">
        {/* Left Image */}
        <img
          src="https://i.ibb.co.com/R4bKT42S/Screenshot-2026-01-04-005432.png"
          alt="Stretching Woman"
          className="rounded-xl shadow-md w-full object-cover"
        />

        {/* Quote */}
        <div className="bg-base-300 rounded-xl shadow p-6">
          <p className=" italic text-lg leading-relaxed">
            “As someone who struggled with consistency in my fitness routine, I created Habit-Tracker to make healthy habits easier for everyone. Whether you're training for your first 5K, recovering from injury, or just trying to move more each day.”
          </p>
          <p className="mt-4 text-right font-semibold text-primary">
            — Taylor Morgan<br />Founder of Habit-Tracker
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        {/* Vision */}
        <div className="bg-base-300 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
          <p className=" mb-6">
            To become the most trusted and indispensable fitness software, dedicated to revolutionizing how people approach their well-being. We empower individuals to train smarter.
          </p>
          <Link
            to="/browse"
            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
          >
            Get Started Free
          </Link>
        </div>

        {/* Right Image */}
        <img
          src="https://i.ibb.co.com/mF0hQV2G/Screenshot-2026-01-04-005432.png"
          alt="Running Man"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto mt-12 bg-base-300 rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary text-center">Our Mission</h2>
        <ul className="list-disc list-inside  space-y-3">
          <li>Discover practical strategies, motivating insights, and actionable steps.</li>
          <li>Foundation of sustainable progress, mindful movement, and holistic well-being.</li>
          <li>We focus on optimizing processes, and fostering continuous learning to help you.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;