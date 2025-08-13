"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  const router = useRouter();
  return (
    <>
      <h1>Error Occurred</h1>
      <p>{error.message}</p>
      <button
        onClick={()=>{startTransition(() => {
          router.refresh();
          reset();
        })}}
      >
        Try Again
      </button>
    </>
  );
}
