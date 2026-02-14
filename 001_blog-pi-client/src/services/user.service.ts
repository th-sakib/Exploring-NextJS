import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      // grab cookie from nextJS defined method
      const cookieStore = await cookies();

      /*
       * We are adding the Cookie header on the request
       * Because in `session baased authentication` server need cookie to send user info bg-black
       * As we are trying to get the user information from server components
       * We manually have to pass the cookie,*/
      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();
      return { data: session, error: null };
    } catch (err) {
      return { data: null, errror: { message: "Something went wrong" } };
    }
  },
};
