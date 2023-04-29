
import React from 'react'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import classNames from 'classnames'
interface Props {
    onClick?: () => void,
    active?: boolean
}

export default function BarsButton({ active, onClick }: Props) {

    return (
        <button className={classNames(`flex items-center justify-center text-2xl
                            group/button w-[50px] h-full text-dark hover:bg-[#ececec] lg:hidden`, { active })}
            onClick={onClick}>
            <HiOutlineBars3 className='group-[.active]/button:hidden' />
            <HiOutlineXMark className='hidden group-[.active]/button:block' />
        </button>
    )
}
