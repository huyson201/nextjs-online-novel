
import Link from 'next/link'
import React from 'react'
import Tag from '../common/Tag'

export default function CompletedBookItem() {
    return (
        <Link href={"#"} className='block' >
            <div className='bg-white p-4 hover:bg-[#f5f5f5] transition-all duration-300 border-b border-dark/10'>
                <div className='font-bold text-xl text-dark'>
                    Trùng Sinh Chi Ma Giáo Giáo Chủ (Côn Luân Ma Chủ) - Dịch full
                </div>
                <div className='flex flex-wrap gap-2 mt-4'>
                    <Tag title='Tiên hiệp' background='info' size='sm' color='white' />
                    <Tag title='Tiên hiệp' background='info' size='sm' color='white' />
                    <Tag title='Tiên hiệp' background='info' size='sm' color='white' />
                    <Tag title='Tiên hiệp' background='info' size='sm' color='white' />
                    <Tag title='Tiên hiệp' background='info' size='sm' color='white' />
                    <Tag title='Tiên hiệp' background='info' size='sm' color='white' />
                </div>
            </div>
        </Link>
    )
}
