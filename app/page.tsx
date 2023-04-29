import Image from 'next/image'
import { Inter } from 'next/font/google'
import services from '@/lib/services'
import HeroSlider from './components/HeroSlider/HeroSlider'
import Wrapper from './components/common/Wrapper'
import HorizontalList from './components/HorizontalList/HorizontalList'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const slidesRes: Promise<Slide[]> = services.book.getSlides()
  const recommendBooksRes: Promise<Book[]> = services.book.getRecommends()
  const [slides, recommendBooks] = await Promise.all([slidesRes, recommendBooksRes])
  return (
    <main className="">
      <Wrapper>
        <HeroSlider slides={slides} />

        <section>
          <div className='mt-6'>
            <h2 className='mb-6 text-2xl md:text-3xl font-bold'>Truyện đề cử</h2>
            <HorizontalList books={recommendBooks} />
          </div>
        </section>
      </Wrapper>
    </main>
  )
}
