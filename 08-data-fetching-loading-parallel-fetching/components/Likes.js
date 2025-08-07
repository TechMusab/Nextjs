import React from 'react'

export default async function Likes() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Views data loaded");
        }, 6000); 
    })
    
    

    return (
        <>
            <p>
                10k Likes
            </p>
        </>
    )
}
