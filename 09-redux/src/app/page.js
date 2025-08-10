import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 m-10">
      <h1 className="font-bold text-3xl ">
        Counter App
      
      </h1>
      <Link className="bg-green-600 rounded-2xl px-6 py-2 w-40" href="/counter">
          Go to Counter
        </Link>
    </div>
  );
}
