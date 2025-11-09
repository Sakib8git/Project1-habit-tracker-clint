import React, { useState, useEffect } from "react";
import HabbitCard from "../../Components/Cards/HabbitCard";
import Spinner from "../../Components/Spinner/Spinner";

const BrowseHabits = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with real fetch logic)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Spinner /> : <HabbitCard />}
    </div>
  );
};

export default BrowseHabits;