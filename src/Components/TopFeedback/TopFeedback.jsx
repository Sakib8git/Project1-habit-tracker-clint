import React from "react";
import styled from "styled-components";

const feedbacks = [
  {
    id: 1,
    name: "Ayesha",
    mood: "🙂",
    message: "This app helped me stay consistent with journaling. Love the clean UI!",
  },
  {
    id: 2,
    name: "Rafi",
    mood: "😎",
    message: "Tracking my water intake daily has become a fun habit now!",
  },
  {
    id: 3,
    name: "Tanvir",
    mood: "😤",
    message: "I struggled with sleep, but the reminders really helped me fix my routine.",
  },
];

const TopFeedback = () => {
  return (
    <StyledWrapper>
      <section className="py-12 px-6 bg-sky-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          💬 What Our Users Are Saying
        </h2>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          {feedbacks.map((fb) => (
            <div key={fb.id} className="card">
              <div className="text-3xl mb-2 z-10 relative">{fb.mood}</div>
              <p className="text-gray-700 italic mb-4 z-10 relative">"{fb.message}"</p>
              <p className="text-sm text-gray-500 font-semibold text-right z-10 relative">
                — {fb.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </StyledWrapper>
  );
};

export default TopFeedback;


const StyledWrapper = styled.div`
  .card {
    position: relative;
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;
    overflow: hidden;
    cursor: pointer;
  }

  .card::before,
  .card::after {
    content: "";
    position: absolute;
    width: 20%;
    height: 20%;
    background-color: lightblue;
    transition: all 0.5s ease;
    z-index: 0;
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .card:hover::before,
  .card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;