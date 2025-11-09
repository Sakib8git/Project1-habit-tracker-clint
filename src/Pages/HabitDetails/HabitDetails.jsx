import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import Spinner from "../../Components/Spinner/Spinner";

const HabitDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <Wrapper>
        <AnimatedBackground src="https://lottie.host/74df5d92-1d3d-4988-89ab-a4e2781f6fef/ljHYmPbE7e.lottie" />
        <Content>
          <Spinner />
        </Content>
      </Wrapper>
    );

  return (
    <Wrapper>
      <AnimatedBackground src="https://lottie.host/74df5d92-1d3d-4988-89ab-a4e2781f6fef/ljHYmPbE7e.lottie" />
      <Content>
        <Card>
          <Image
            src="https://source.unsplash.com/400x200/?habit,focus"
            alt="Habit"
          />
          <h2 className="text-2xl font-bold mb-2">Daily Meditation</h2>
          <span className="text-sm bg-purple-600 text-white px-3 py-1 rounded-full mb-4 inline-block">
            Mindfulness
          </span>
          <p className="text-gray-700 mb-4">
            Practice 10 minutes of guided meditation every morning to improve
            focus and reduce stress.
          </p>

          {/* Progress */}
          <div className="mb-4 text-left">
            <label className="text-sm font-medium text-gray-600">
              Progress (Last 30 Days)
            </label>
            <ProgressBar>
              <ProgressFill style={{ width: "70%" }} />
            </ProgressBar>
            <p className="text-sm text-gray-500 mt-1">21/30 days completed</p>
          </div>

          {/* Streak Badge */}
          <div className="mb-4">
            <StreakBadge>🔥 7-Day Streak</StreakBadge>
          </div>

          {/* Creator Info */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Creator"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">
                Created by: Nazmus
              </p>
              <p className="text-xs text-gray-500">Started on: Oct 10, 2025</p>
            </div>
          </div>

          {/* Mark Complete Button */}
          <button className="btn bg-purple-600 text-white hover:bg-purple-700 w-full">
            Mark Today as Complete
          </button>
        </Card>
      </Content>
    </Wrapper>
  );
};

export default HabitDetails;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  height: 10px;
  background: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: #9333ea;
  transition: width 0.3s ease;
`;

const StreakBadge = styled.div`
  display: inline-block;
  background: #facc15;
  color: #92400e;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
`;
