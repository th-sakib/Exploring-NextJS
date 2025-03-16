export async function generateMetadata({ params }) {
  const { post } = await params;
  console.log(post);
  return {
    title: `posts ${post}`,
  };
}

export default async function page({ params, searchParams }) {
  console.log(await params); // localhost:3000/route/1 => {slug: 1}
  console.log(await searchParams); // /route?name=john => {name: 'john'}
  return <div>Post {}</div>;
}
