"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <h1>About page</h1>
      <button
        onClick={() => {
          router.push("/blogs");
        }}
      >
        Click me
      </button>
    </>
  );
}
