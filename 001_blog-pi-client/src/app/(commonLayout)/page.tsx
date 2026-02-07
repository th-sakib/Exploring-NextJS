import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

export default async function Home() {
  // grab cookie from nextJS defined method
  const cookieStore = await cookies();

  /*
   * We are adding the Cookie header on the request
   * Because in `session baased authentication` server need cookie to send user info bg-black
   * As we are trying to get the user information from server components
   * We manually have to pass the cookie,*/
  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const session = await res.json();
  console.log(session);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="outline">click me</Button>
    </div>
  );
}
