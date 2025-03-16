import { notFound } from "next/navigation";
import React from "react";

export const metadata = {
  title: "files",
};

export default async function page({ params }) {
  const { file } = await params;
  console.log(await params);
  // console.log(file[0]);
  if (file[0] === "test") {
    notFound();
  }

  return <div>page</div>;
}
