"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, []);

  return (
    <div>
      <h1>Error manuall</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
