import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TopFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

useEffect(() => {
  const API_BASE = import.meta.env.VITE_API_BASE;

  const fetchFeedbacks = () => {
    fetch(`${API_BASE}/feedback/recent`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data))
      .catch((err) => console.error("Failed to load feedback:", err));
  };

  fetchFeedbacks(); 

  const interval = setInterval(fetchFeedbacks, 8000); 

  return () => clearInterval(interval); // cleanup
}, []);

  return (
    <StyledWrapper>
      <section className="py-12 px-6 ">
        <h2 className="text-3xl font-bold text-center  mb-10">
          💬 What Our Users Are Saying
        </h2>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          {feedbacks.map((fb) => (
            <div key={fb._id} className="card">
              <div className="text-3xl mb-2 z-10 relative">{fb.mood}</div>
              <p className="text-gray-700 italic mb-4 z-10 relative">"{fb.entry}"</p>
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