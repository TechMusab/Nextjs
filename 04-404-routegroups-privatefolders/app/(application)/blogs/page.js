import React from "react";
import Link from "next/link";
export default function Page(props) {
  const blogs = [
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
    { id: 3, title: "Blog 3" },
  ];

  return (
    <>
      <div>
        <h1>Blogs</h1>
        {blogs.map((blog) => (
          <p key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </p>
        ))}
      </div>
    </>
  );
}
