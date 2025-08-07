import Link from 'next/link'
import React from 'react'

export default function Page() {
    

    return (
        <>
           <h1>Services</h1>
            <Link href='/services/web-dev'>Web Development</Link>
            <br />
            <Link href='/services/app-dev'>App Development</Link>
        </>
    )
}
