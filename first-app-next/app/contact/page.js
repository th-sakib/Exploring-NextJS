import Link from "next/link";

export const metadata = {
  title: "contact",
};
function Contact() {
  return (
    <div>
      contact
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
    </div>
  );
}

export default Contact;
