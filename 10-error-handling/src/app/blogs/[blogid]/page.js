import React from 'react'

export default async function Page({ params }) {
    const { blogid } =await params;
    const no=Math.random();
    console.log(no)
   if(no>0.5){
        throw new Error('Random error occurred while fetching blog data');
   }
    return (
        <>
            <h1>Blog ID: {blogid}</h1>
            <p>This is the blog page for blog ID: {blogid}</p>
        </>
    )
}
