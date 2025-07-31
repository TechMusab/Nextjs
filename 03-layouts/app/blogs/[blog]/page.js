import React from 'react'

export async function generateMetadata({params}) {
    const {blog} = await params;
    return {
        title: `Blog ${blog}`,
    }
}

export default async function Page({params}) {
    const {blog} =await params;
    console.log(blog);
    

    return (
        <>
            <h1>Blog {blog}</h1>
        </>
    )
}
