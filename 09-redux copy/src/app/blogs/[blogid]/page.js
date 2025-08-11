import React from 'react'

export default async function Page({ params }) {
    const { blogid } =await params;
    if(blogid % 2 === 0) {
        throw new Error("This is an error for even blog IDs");
    }
    return (
        <>
            <h1>Blog ID: {blogid}</h1>
            <p>This is the blog page for blog ID: {blogid}</p>
        </>
    )
}
