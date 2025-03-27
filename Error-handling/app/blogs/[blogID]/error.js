"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

function error({ error, reset }) {
  const router = useRouter();
  return (
    <div style={{ textAlign: "center", fontSize: "3rem", color: "red" }}>
      BlogID can be only an odd number
      <p>Error message: {error.message}</p>
      {/* in this case we are going to reload our entire website */}
      {/* <button onClick={() => window.location.reload()}>Try Again</button>  */}
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Try again
      </button>
    </div>
  );
}

export default error;
