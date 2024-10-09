"use client"
import { useState, useEffect } from 'react';

const AnimatedSVG = () => {
  const [pathD, setPathD] = useState(
    "M800 400C800 620.914 620.914 800 400 800C179.086 800 0 620.914 0 400C0 179.086 179.086 0 400 0C620.914 0 800 179.086 800 400Z"
  );

  useEffect(() => {
    const animatePath = () => {
      let t = 0;
      const updatePath = () => {
        // Use trigonometric functions to modify the control points slightly to create a wavy border effect
        const r = 400; // Radius of the circle

        const curve1 = r + Math.sin(t) * 20; // Top
        const curve2 = r + Math.sin(t + 2) * 20; // Bottom
        const curve3 = r + Math.cos(t + 1) * 20; // Left
        const curve4 = r + Math.cos(t + 3) * 20; // Right

        // Maintain the circular shape but animate the border control points
        const newPathD = `
          M${800} ${r}
          C800 ${curve2 + r / 2} ${curve4 + r / 2} 800 ${r} 800
          C${curve3 - r / 2} 800 0 ${curve2 + r / 2} 0 ${r}
          C0 ${curve1 - r / 2} ${curve3 - r / 2} 0 ${r} 0
          C${curve4 + r / 2} 0 800 ${curve1 - r / 2} 800 ${r}Z
        `;

        setPathD(newPathD);
        t += 0.05; // Increment the time for continuous smooth animation
      };

      const intervalId = setInterval(updatePath, 50); // Update the path every 50ms

      return () => clearInterval(intervalId);
    };

    animatePath();
  }, []);

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={pathD} fill="#0E9CFE" />
    </svg>
  );
};

export default AnimatedSVG;
