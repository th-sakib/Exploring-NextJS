"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const hiphopContent = [
  {
    title: "Master the Mic",
    description:
      "Learn the art of delivering powerful and impactful lyrics. Whether you're freestyling or performing a written verse, refine your flow and own the stage with confidence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Master the Mic
      </div>
    ),
  },
  {
    title: "Craft the Perfect Beat",
    description:
      "Dive into beat-making and production techniques to create rhythms that captivate audiences. From sampling to drum programming, turn your ideas into industry-quality tracks.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        craft the perfecto beat
      </div>
    ),
  },
  {
    title: "Write Your Story",
    description:
      "Transform your thoughts and emotions into lyrics that resonate. Our expert guidance will help you structure songs, convey messages, and connect with your audience through your words.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white">
        Write Your Story
      </div>
    ),
  },
  {
    title: "Elevate Your Performance",
    description:
      "Stage presence matters. Learn how to captivate your audience with movement, energy, and charisma. Take your performances to the next level and leave a lasting impression.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Elevate Your Performance
      </div>
    ),
  },
  {
    title: "Stay Ahead with Trends",
    description:
      "Learn about the latest hip-hop trends, from evolving production styles to the most effective ways to distribute your music. Stay relevant and impactful in the ever-changing music industry.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] flex items-center justify-center text-white">
        Stay Ahead with Trends
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full h-full overflow-hidden">
      <StickyScroll content={hiphopContent} />
    </div>
  );
}

export default WhyChooseUs;
