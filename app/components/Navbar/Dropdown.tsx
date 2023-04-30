"use client"

import React, { useEffect, useRef, useState } from 'react'
import Wrapper from '../common/Wrapper'
import classNames from 'classnames'
import { HiChevronDown } from 'react-icons/hi2'

interface Props {
    children?: any,
    title: string,
}
const Dropdown = ({ title, children }: Props) => {
    const [showDrop, setShowDrop] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const handleClickOutside = (event: any) => {
            if (!dropdownRef.current) return

            if (!dropdownRef.current.contains(event.target)) {
                setShowDrop(false)
            }
        }

        window.addEventListener("click", handleClickOutside)
        return () => {
            window.removeEventListener("click", handleClickOutside)
        }
    }, [])
    return (
        <div className={classNames('relative w-full lg:w-auto group', { active: showDrop })} ref={dropdownRef}>
            <button className={classNames(
                `capitalize outline-none hover:text-primary  text-dark
                    hover:bg-black/5 w-full lg:w-auto lg:text-sm lg:hover:bg-transparent  duration-300 transition-all py-2
                    group-[.active]:text-primary lg:font-medium lg:py-0`)}
                onClick={() => setShowDrop(prev => !prev)}>
                <div className='mx-auto px-3 container flex justify-between lg:px-0 lg:justify-start items-center'>
                    {title}
                    <HiChevronDown className='text-primary text-xl lg:text-base lg:ml-1' />
                </div>
            </button>

            <div className='bg-white pb-2 hidden group-[.active]:block lg:absolute lg:top-[calc(100%_+_14px)] lg:left-0 
                                              lg:shadow-sm'>
                <Wrapper className='lg:py-2 lg:px-2'>
                    {children}
                </Wrapper>
            </div>
        </div>
    )
}

export default Dropdown