
"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper'
import Link from 'next/link';

interface Props {
    slides: Slide[]
}

const HeroSlider = ({ slides }: Props) => {
    return (
        <section className='pt-8 px-2'>
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                    dynamicBullets: true,

                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
            >
                {
                    slides.map(slide => (
                        <SwiperSlide key={slide.id.toString()}>
                            <Link href={"#"} className='block'>
                                <div>
                                    <img className='w-full rounded-lg max-h-[380px] object-cover' src={slide.bannerImg} alt={slide.book.slug} loading='lazy' />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default HeroSlider