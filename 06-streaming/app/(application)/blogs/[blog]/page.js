import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({params}) {
    const {blog} = await params;
    return {
        title: `Blog ${blog}`,
    }
}

export default async function Page({params}) {
    const {blog} =await params;
     if(!blog.match(/^[0-9]+$/)){
        notFound()
    }
    return (
        <>
            <h1>Blog {blog}</h1>
        </>
    )
}
