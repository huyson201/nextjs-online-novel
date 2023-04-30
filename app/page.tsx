import Image from 'next/image'
import { Inter } from 'next/font/google'
import services from '@/lib/services'
import HeroSlider from './components/HeroSlider/HeroSlider'
import Wrapper from './components/common/Wrapper'
import HorizontalList from './components/HorizontalList/HorizontalList'
import BookItem from './components/BookItem/BookItem'
import { Book, Slide } from '@/types/Book'
import CompletedBookItem from './components/CompletedBookItem/CompletedBookItem'
import Footer from './components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const slidesRes: Promise<Slide[]> = services.book.getSlides()
  const recommendBooksRes: Promise<Book[]> = services.book.getRecommends()
  const latestBooksRes: Promise<PaginationResponse<Book[]>> = services.book.getLatest({ page: 1, limit: 10 })
  const completedBooksRes: Promise<PaginationResponse<Book[]>> = services.book.getLatest({ page: 1, limit: 10 })
  const [slides, recommendBooks, latestBooks, completedBooks] = await Promise.all([slidesRes, recommendBooksRes, latestBooksRes, completedBooksRes])


  return (
    <>
      {/* main content */}
      <main >
        <Wrapper>
          <HeroSlider slides={slides} />

          <section>
            <div className='mt-6'>
              <h2 className='section-title'>Truyện đề cử</h2>
              <HorizontalList books={recommendBooks} />
            </div>
          </section>

          <section>
            <div className='mt-6 grid grid-cols-1 gap-y-8  lg:grid-cols-12 gap-x-4'>
              <div className='lg:col-span-9'>
                <h2 className='section-title'>Truyện mới cập nhật</h2>
                <div className='bg-white shadow-lg'>

                  {
                    /* @ts-expect-error Server Component */
                    latestBooks.docs.map(book => <BookItem data={book} key={book.slug} />)
                  }
                </div>
              </div>
              <div className='lg:col-span-3 '>
                <h2 className='section-title'>Truyện đã hoàn thành</h2>
                <div className='bg-white shadow-lg'>
                  <CompletedBookItem />
                  <CompletedBookItem />
                  <CompletedBookItem />
                  <CompletedBookItem />
                  <CompletedBookItem />
                  <CompletedBookItem />
                </div>
              </div>
            </div>
          </section>
        </Wrapper>
      </main>

      <Footer />

    </>
  )
}
