import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AnimatedBackground = ({ src }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        opacity: 0.2,
      }}
    >
      <DotLottieReact src={src} loop autoplay />
    </div>
  );
};

export default AnimatedBackground;