"use client";
import React, { useState, useEffect } from "react";
export default function Page(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <>
      Posts
      {posts.map((post, index) => (
        <div key={index}>
          <p>Title:{post.title}</p>
          <p>Body:{post.body}</p>
        </div>
      ))}
    </>
  );
}
