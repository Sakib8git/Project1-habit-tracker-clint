import React, { useEffect, useState } from "react";

import styled from "styled-components";
import AnimatedBackground from "../../Components/AnimatedBackground/AnimatedBackground";
import Spinner from "../../Components/Spinner/Spinner";

const HabitDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with real data fetch if needed)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <AnimatedBackground src="https://lottie.host/74df5d92-1d3d-4988-89ab-a4e2781f6fef/ljHYmPbE7e.lottie" />
      <Content>{loading ? <Spinner /> : <h2>HabitDetails</h2>}</Content>
    </Wrapper>
  );
};

export default HabitDetails;

// -------------------------------------------------------------------
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
  backdrop-filter: blur(6px);
  border-radius: 12px;
  color: #0f172a;
  font-weight: 600;
  text-align: center;
`;
