"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'
import Link from 'next/link';

interface Props {
    books: Book[]
}


export default function HorizontalList({ books }: Props) {
    const getTextFromHtml = (htmlString: string) => {
        const divEl = document.createElement("div")
        divEl.innerHTML = htmlString
        return divEl.innerText
    }

    return (
        <div>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    dynamicBullets: true,
                }}
                slidesPerView={'auto'}
                className='pb-8'
            >
                {
                    books.map(book => (
                        <SwiperSlide key={book.id.toString()} className='group mr-[10px] md:mr-7 w-[100px] h-[150px] md:w-[200px] md:h-[300px]'>
                            <Link href={"#"} className='block'>
                                <div className='relative '>
                                    <div className='relative' >
                                        <img className='w-full rounded-lg h-full object-cover' src={`https://cdntv.techflash.net/${book.image}`} alt={book.title} loading='lazy' />
                                        <div className='absolute top-0 left-0'>
                                            <span>Full</span>
                                        </div>
                                    </div>
                                    <div className=' opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex  flex-col rounded-lg p-2 absolute w-full h-full bg-dark/90 top-0 left-0'>
                                        <div className='text-white font-semibold text-base  md:text-xl line-clamp-3 overflow-hidden text-ellipsis'>
                                            {book.title}
                                        </div>
                                        <div className='mt-auto'>
                                            {book.categories.length > 0 && (
                                                <div className=' pb-1'>
                                                    <span className='text-dark inline-block bg-white rounded px-1 md:px-2 py-1 text-xs relative
                                                                md:after:content-[""] md:after:absolute md:after:h-[1px] md:after:w-full
                                                                md:after:bg-white md:after:left-0 md:after:-bottom-1'>
                                                        {book.categories[0].name}
                                                    </span>
                                                </div>
                                            )}

                                            <div className='text-white hidden md:block line-clamp-4 text-ellipsis overflow-hidden'>
                                                {getTextFromHtml(book.desc)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
