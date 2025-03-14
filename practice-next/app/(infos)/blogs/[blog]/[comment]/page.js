import React from "react";

async function Comment({ params }) {
  console.log(await params);
  const { blog, comment } = await params;
  return (
    <div>
      Comment on page number {blog}
      <p>the comment is - {comment}</p>
    </div>
  );
}

export default Comment;
