import React from "react";
import HeroSlider from "../../Components/Banner/HeroSlider";
import HabbitCard from "../../Components/Cards/HabbitCard";
import WhyBuildHabits from "../../Components/BenifitCard/WhyBuildHabits";
import { Link, useLoaderData } from "react-router";

import Feedback from "../../Components/DailyJournal/Feedback ";
import GoalTracker from "../../Components/TopFeedback/TopFeedback";
import { ScrollFadeUp } from "../../Components/AnimatedBackground/ScrollFadeUp";
import FAQ from "../../Components/FAQ/FAQ";
import CTASection from "../../Components/CAT/CTASection";
import Statistics from "../../Components/Statistics/Statistics";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <title> Habit-Tracker</title>
      <div>
        <HeroSlider></HeroSlider>
      </div>
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-center  pt-20 -pb-8 ">
            Featured Habits
          </h2>

          <HabbitCard habits={data}></HabbitCard>

          <div className="text-center mt-4">
            <Link
              to="/browse"
              className="btn btn-lg primary-col   rounded-full px-4 py-2"
            >
              All Habits
            </Link>
          </div>
        </div>
        <div>
          <ScrollFadeUp>
            <WhyBuildHabits></WhyBuildHabits>
          </ScrollFadeUp>
        </div>
        <div>
          <ScrollFadeUp>
            <Feedback></Feedback>
          </ScrollFadeUp>
        </div>
        <div>
          <ScrollFadeUp>
            <GoalTracker></GoalTracker>
          </ScrollFadeUp>
          <ScrollFadeUp>
            <FAQ></FAQ>
          </ScrollFadeUp>
          <ScrollFadeUp>
            <CTASection></CTASection>
          </ScrollFadeUp>
          <ScrollFadeUp>
            <Statistics></Statistics>
          </ScrollFadeUp>
        </div>
      </div>
    </div>
  );
};

export default Home;
