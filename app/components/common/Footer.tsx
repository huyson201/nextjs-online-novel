
import React from 'react'
import AppStoreImg from '/assets/images/app-store.png'
import GooglePlayImg from '@/assets/images/google-play.png'
import Link from 'next/link'
import Image from 'next/image'
import Wrapper from './Wrapper'
export default function Footer() {
    return (
        <footer className='bg-white text-center mt-8 py-12' >
            <Wrapper>
                <div className='text-2xl font-bold text-dark text-center'>
                    <Link href={"#"}>Novel Hub</Link>
                </div>
                <p className='mt-1 text-dark text-sm'>
                    Webtruyen đọc truyện dịch nhanh nhất, ổn định nhất, đọc truyện KHÔNG quảng cáo.
                </p>
                <div className='flex items-center justify-center gap-x-2 mt-2 '>
                    <Link href={"#"} >
                        <Image className='w-[128px] h-10 object-cover' src={AppStoreImg} alt='app-store' />
                    </Link>
                    <Link className='w-[128px] h-10 object-cover' href={"#"} >
                        <Image src={GooglePlayImg} alt='google-play' />
                    </Link>
                </div>
            </Wrapper>
        </footer>
    )
}
