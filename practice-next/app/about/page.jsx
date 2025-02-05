import Link from "next/link";
import React from "react";

export default async function About() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about/about-me">about me</Link>
    </div>
  );
}
