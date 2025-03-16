import Link from "next/link";

export const metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <div>
      services
      <Link href="/">Home</Link>
      <Link href="/Contact">Contact</Link>
    </div>
  );
}
