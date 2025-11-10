import React, { useState, useEffect } from "react";
import HabbitCard from "../../Components/Cards/HabbitCard";
import Spinner from "../../Components/Spinner/Spinner";
import { useLoaderData } from "react-router";

const BrowseHabits = () => {
  const data = useLoaderData(); // 10 habit objects
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <Spinner /> : <HabbitCard habits={data} />}</div>;
};

export default BrowseHabits;