import React from 'react'

export default async function Views() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Views data loaded");
        }, 3000); 
    })
    

    return (
        <>
            <p>
                20k Views
            </p>
            
        </>
    )
}
