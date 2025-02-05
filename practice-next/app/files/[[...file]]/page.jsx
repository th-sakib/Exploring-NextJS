import React from "react";

async function File({ params }) {
  const { file } = await params;
  return <div>file path: /{file?.join("/")}</div>;
}

export default File;
