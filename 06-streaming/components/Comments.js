import React from 'react'

export default async function Comments() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Views data loaded");
        }, 9000); 
    })
    

    return (
        <>
            <p>
                5k Comments
            </p>
        </>
    )
}
