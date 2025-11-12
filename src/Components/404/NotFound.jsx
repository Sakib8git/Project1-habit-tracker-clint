import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-sky-50 px-4 text-center">
      <title> Habit-Tracker: 404</title>
      <div className="max-w-md w-full">
        <DotLottieReact
          src="https://lottie.host/ffc6f967-738e-43b8-8615-c522f6313dd1/Ckgr2wG5eH.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "300px" }}
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-6 rounded-lg transition-all"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
