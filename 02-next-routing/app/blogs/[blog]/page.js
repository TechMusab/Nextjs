import React from 'react'

export default async function Page({params}) {
    const {blog} =await params;
    console.log(blog);
    

    return (
        <>
            <h1>Blog {blog}</h1>
        </>
    )
}
