// src/components/Spinner.jsx
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[300px]">
      <DotLottieReact
        src="https://lottie.host/d485a8ab-839d-44a4-bcc9-9d44abcd8f93/RAVfLaqDA1.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Spinner;
