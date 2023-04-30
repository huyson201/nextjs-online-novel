import classNames from 'classnames'
import React from 'react'


type Props = {
    background: "success" | "info" | "warning",
    title: string,
    color: "dark" | "white",
    size?: "base" | "sm" | "xs"
}

const Tag = ({ background, title, color, size = "base" }: Props) => {
    return (
        <span className={classNames(
            `
                [&.success]:bg-success
                [&.info]:bg-info
                [&.warn]:bg-warning
                [&.dark]:text-dark
                [&.white]:text-white 
                [&.base]:text-base 
                [&.xs]:text-xs 
                [&.sm]:text-sm 
                rounded px-2 inline-block
                
            `, background, color, size)}>
            {title}
        </span>
    )
}

export default Tag