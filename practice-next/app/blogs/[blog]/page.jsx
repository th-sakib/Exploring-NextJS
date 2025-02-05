import React from "react";

async function blog({ params }) {
  const { blog } = await params;
  console.log(blog);
  return <div>blog - {blog}</div>;
}

export default blog;
