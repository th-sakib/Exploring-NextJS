import Link from "next/link";

export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <div>
      Home
      <Link href="/contact">Contact</Link>
      <Link href="/services">Services</Link>
    </div>
  );
}
