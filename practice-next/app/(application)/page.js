import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/about">about</Link> <br />
      <Link href="/blogs">Blogs</Link>
    </div>
  );
}
