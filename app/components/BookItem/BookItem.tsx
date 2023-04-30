
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../common/Tag'
import { getStringEllipsis, getTimeAgo } from '@/helpers/commom'
import services from '@/lib/services'
import { Book } from '@/types/Book'

interface Props {
    data: Book
}

export default async function BookItem({ data }: Props) {
    const latestChapter: Chapter | null = await services.book.getLatestChapter(data.id)

    return (
        <div className='flex p-4 border-b border-dark/10 last:border-none'>
            <Link href={"#"} className='block w-1/4 lg:w-[60px] mr-4 lg:mr-2'>
                <div >
                    <Image className='rounded w-full h-full object-cover' src={`https://cdntv.techflash.net/${data.image}`} width={466} height={700} alt={data.title} />
                </div>
            </Link>
            <div className='flex flex-col gap-y-2 gap-x-3 lg:flex-row w-3/4 lg:w-[calc(100%_-_60px)]'>
                <div className='lg:w-1/3'>
                    <Link href={"#"}>
                        <div className='font-semibold text-primary text-base sm:text-xl hover:text-dark transition-colors duration-200'>
                            {getStringEllipsis(data.title, 40)}
                        </div>
                    </Link>
                    <div className='mt-1 text-sm text-dark'>{data.author}</div>
                </div>
                <div className='lg:w-1/3'>
                    <div className='flex gap-2 flex-wrap'>
                        {
                            data.categories.map(cate => (
                                <Link key={cate.slug} className='inline-block hover:underline' href={"#"}>
                                    <Tag title={cate.name} background='info' color='white' size='sm' />
                                </Link>
                            ))
                        }

                    </div>
                </div>

                <div className='lg:w-1/3'>
                    <Link href={"#"}>
                        <div className=' text-primary text-sm xs:text-base hover:text-dark transition-colors duration-200'>

                            {
                                latestChapter !== null ? (<> <span className='font-semibold'>Chương {latestChapter.chapterNumber}.</span>{latestChapter.title.replace(`Chương ${latestChapter.chapterNumber}. `, "")}</>) : ("Đang cập nhật")
                            }

                        </div>
                    </Link>
                    <div className='mt-1 text-sm text-dark'>
                        {
                            latestChapter !== null ? getTimeAgo(latestChapter.updatedAt) : "Đang cập nhật"
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
