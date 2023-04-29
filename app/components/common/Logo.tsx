import React from 'react'
import Link from 'next/link'

export default function Logo() {
    return (
        <div>
            <Link className='text-primary text-xl sm:text-2xl font-bold' href={"/"}>
                Novel Hub
            </Link>
        </div>
    )
}
