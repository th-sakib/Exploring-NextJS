const Blog = async ({ params }) => {
  const { blogID } = await params;
  // if (blogID % 2 === 0) {
  //   throw new Error("custom error for testing: on even blog pages");
  // }

  const random = Math.random();
  console.log(random);
  if (random > 0.5) {
    throw new Error(
      "Custom errror for testing: on random number greater than 0.5"
    );
  }

  return (
    <>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
