import Image from "next/image";
import Link from "next/link";

export default async function Home({params, searchParams}) {
  console.log("Params:", await params);
  console.log("Search Params:", await searchParams);
  return (
    <>
      <h1>Technical Agency</h1>
     <Link href='/about'>About</Link>
     {" "}
     <Link href='/services'>Services</Link>
     {" "}
     <Link href='/blogs'>Blogs</Link>

    </>
  );
}
