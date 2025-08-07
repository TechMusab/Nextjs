import React from 'react'

export default async function Page({params}) {
   const {blog} = await params;
    

    return (
        <>
            <h1>All comments on this {blog}</h1>
        </>
    )
}
