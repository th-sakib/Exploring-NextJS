export const dynamic = "force-dynamic";

export default async function AboutPage() {
  //* for simulate fetch request
  await new Promise((resolve) => setTimeout(resolve, 4000));
  //
  //* for simulating error
  // throw new Error("Manual Error");

  return <div>Welcome to the about page.</div>;
}
