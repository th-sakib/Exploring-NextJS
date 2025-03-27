"use client";

import { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["Mango", "Banana"]);
  return (
    <>
      <div>
        <h1>About Us</h1>
        <p>We are a company dedicated to providing quality services.</p>
        {fruits.map((fruit, idx) => (
          <div key={idx}>{fruit}</div>
        ))}
        <button
          onClick={() => {
            setFruits(null);
          }}
        >
          click me
        </button>
      </div>
    </>
  );
};

export default About;
