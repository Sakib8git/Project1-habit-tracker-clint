import React from "react";
import styled from "styled-components";

const benefits = [
  {
    title: "Consistency",
    description: "Habits help you stay on track and build momentum.",
    color: "red",
  },
  {
    title: "Focus",
    description: "They reduce decision fatigue and improve clarity.",
    color: "blue",
  },
  {
    title: "Growth",
    description: "Small actions compound into big results over time.",
    color: "green",
  },
  {
    title: "Confidence",
    description: "Achieving habits boosts self-belief and discipline.",
    color: "yellow",
  },
];

const WhyBuildHabits = () => {
  return (
    <StyledWrapper>
      <h2 className="section-title">Why Build Habits</h2>
      <div className="cards">
        {benefits.map((b, i) => (
          <div key={i} className={`card ${b.color}`}>
            <p className="tip">{b.title}</p>
            <p className="second-text">{b.description}</p>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 3rem 1rem;
  // background: #DFF2FE;
  text-align: center;

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #1f2937;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 140px;
    width: 220px;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    transition: 400ms transform, 400ms box-shadow, 400ms background-color;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }

  .card.red {
    background-color: #f43f5e;
  }
  .card.blue {
    background-color: #3b82f6;
  }
  .card.green {
    background-color: #22c55e;
  }
  .card.yellow {
    background-color: #eab308;
  }

  .card p.tip {
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .card p.second-text {
    font-size: 0.85em;
    line-height: 1.3;
  }

  .card:hover {
    transform: scale(1.08);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    background-color: rgba(255, 255, 255, 0.1);
    color: #333;
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(6px);
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export default WhyBuildHabits;