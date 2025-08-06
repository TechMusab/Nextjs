import React from 'react'

export const metadata={
    title:{
        absolute: 'Dynamic File Path',
    }
}

export default async function Page({params}) {
     const {filepath} = await params;
    

    return (
        <>
            <h1>File Path: {filepath?.join('/')}</h1>
            <p>This is a dynamic route that captures all segments of the URL.</p>
            
        </>
    )
}
