import Link from "next/link";
import React from "react";

async function blog({ params }) {
  const { blog } = await params;
  console.log(blog);
  return (
    <div>
      blog - {blog}
      <Link href={`/blogs/${blog}/comment`}>|Comment</Link>
    </div>
  );
}

export default blog;
