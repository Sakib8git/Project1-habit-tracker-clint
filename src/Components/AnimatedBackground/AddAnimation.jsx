import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AddAnimation = ({ src, loop = true, autoplay = true, style = {} }) => {
  return (
    <div style={{ width: "100%", height: "100%", ...style }}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} />
    </div>
  );
};

export default AddAnimation;
