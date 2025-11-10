import React from "react";
import HeroSlider from "../../Components/Banner/HeroSlider";
import HabbitCard from "../../Components/Cards/HabbitCard";
import WhyBuildHabits from "../../Components/BenifitCard/WhyBuildHabits";
import { useLoaderData } from "react-router";

import Feedback from "../../Components/DailyJournal/Feedback ";
import GoalTracker from "../../Components/TopFeedback/TopFeedback";

const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <div>
        <HeroSlider></HeroSlider>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 pt-20 ">
        Featured Habits
      </h2>
        <HabbitCard habits={data} ></HabbitCard>
      </div>
      <div>
        <WhyBuildHabits></WhyBuildHabits>
      </div>
      <div>
        <Feedback></Feedback>
      </div>
      <div>
        <GoalTracker></GoalTracker>
      </div>
    </div>
  );
};

export default Home;
