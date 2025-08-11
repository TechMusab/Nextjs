"use client"

export default function Error({error}) {
    return (
        <>
            <h1>Error Occurred</h1>
            <p>{error.message}</p>
            <p>Please try again later.</p>
        </>
    )
}
