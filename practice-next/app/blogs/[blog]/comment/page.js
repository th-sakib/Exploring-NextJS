import React from "react";

async function Comment({ params }) {
  const { blog } = await params;
  return <div>Comment on page number {blog}</div>;
}

export default Comment;
