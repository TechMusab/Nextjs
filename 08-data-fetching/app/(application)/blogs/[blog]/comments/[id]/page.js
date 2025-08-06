import React from 'react'

export default async function Page({params}) {
    const {blog,id} = await params;
    

    return (
        <>
        <h1>{id}th Comment on {blog} blog</h1>
            
        </>
    )
}
