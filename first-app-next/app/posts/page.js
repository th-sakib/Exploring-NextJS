export const metadata = {
  title: "posts",
};
export default async function page({ searchParams }) {
  console.log(await searchParams);
  return <div>Posts</div>;
}
