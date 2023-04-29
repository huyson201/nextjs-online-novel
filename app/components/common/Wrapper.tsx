import React from 'react'
import classNames from 'classnames'
export default function Wrapper({ children, className }: { children: any, className?: string }) {
    return (
        <div className={classNames('container mx-auto px-3 lg:px-12', className)}>
            {children}
        </div>
    )
}
