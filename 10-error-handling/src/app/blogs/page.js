import React from "react";
import Link from "next/link";

export default function Page() {
    const no = Math.random();
    console.log(no);
    if (no > 0.5) {
      throw new Error("Random error occurred while fetching blog data");
    }
  return (
    <>
      <Link href="/blogs/1">Blog 1</Link>
      <br />
      <Link href="/blogs/2">Blog 2</Link>
      <br />
      <Link href="/blogs/3">Blog 3</Link>
      <br />
    </>
  );
}
