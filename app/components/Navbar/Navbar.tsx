
"use client"
import React, { useState } from 'react'
import Wrapper from '../common/Wrapper'
import Logo from '../common/Logo'
import BarsButton from './BarsButton'
import { HiChevronDown } from 'react-icons/hi2'
import Link from 'next/link'
import classNames from 'classnames'
import Dropdown from './Dropdown'
interface Props {
    categories: ICategory[]
}

export default function Navbar({ categories }: Props) {

    const [active, setActive] = useState(false)
    const handleClickBars = () => setActive(prev => !prev)

    return (
        <div className='flex fixed top-0 left-0 w-full z-[2] bg-white shadow '>
            <div className='container pl-3 mx-auto lg:px-14 '>
                <div className='flex justify-between items-center flex-wrap lg:flex-nowrap h-[var(--navbar-height)]'>
                    <Logo />
                    <BarsButton onClick={handleClickBars} active={active} />

                    {/* menu */}
                    <div className={classNames(
                        `nav-menu-scrollbar w-full h-[calc(100vh_-_var(--navbar-height))] hidden lg:h-full lg:overflow-visible overflow-y-auto 
                        lg:w-auto bg-white absolute  flex-col lg:flex-row lg:items-center lg:static top-full pt-4 lg:pt-0 left-0
                        lg:grow lg:basis-0 [&.show]:flex lg:flex lg:ml-4 gap-x-4`,
                        { show: active }
                    )}>

                        {/* cates dropdown */}

                        <Dropdown title='Thể loại'>
                            <div className='flex lg:w-[460px] flex-wrap'>
                                {
                                    categories.map(cate => (
                                        <Link className='inline-block w-2/4 sm:w-auto sm:px-2 py-2 text-xs hover:text-primary duration-200 lg:w-1/3'
                                            key={cate.slug} href={`/the-loai/` + cate.slug} >
                                            <div className='whitespace-normal'>
                                                {cate.name}
                                            </div>
                                        </Link>

                                    ))
                                }
                            </div>
                        </Dropdown>


                        {/* list books dropdown */}

                        <Dropdown title='Danh sách'>
                            <div >
                                <Link className='block whitespace-nowrap  py-2 text-xs hover:text-primary duration-200 lg:px-4 lg:text-sm lg:py-1 text-dark'
                                    href={`/bang-xep-hang`} >
                                    <div  >
                                        Bảng Xếp hạng
                                    </div>
                                </Link>
                                <Link className='block py-2 text-xs whitespace-nowrap hover:text-primary duration-200 lg:px-4 lg:text-sm lg:py-1 text-dark'
                                    href={`/truyen-moi`} >
                                    <div >
                                        Truyện mới cập nhật
                                    </div>
                                </Link>

                            </div>
                        </Dropdown>

                        {/* login/register */}
                        <Wrapper className='pb-4 flex flex-col lg:px-0 lg:w-auto lg:mr-0 lg:pb-0 lg:ml-auto lg:gap-4 lg:flex-row'>
                            <Link className='block py-2 text-center text-sm rounded-sm font-medium hover:bg-primary-hover transition-all
                                             bg-primary text-white mt-2 lg:mt-0 lg:px-4' href={"#"}>
                                Đăng nhập
                            </Link>
                            <Link className='block py-2 text-center text-sm rounded-sm font-medium hover:bg-gray-200 transition-all
                                             text-dark bg-gray-100 mt-2 lg:mt-0 lg:px-4' href={"#"}>
                                Đăng ký
                            </Link>
                        </Wrapper>
                    </div>
                </div>
            </div>
        </div>

    )
}
