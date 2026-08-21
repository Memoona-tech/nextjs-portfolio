import React from 'react'
import {cn} from '@/lib/utils'
interface Props{
    children: React.ReactNode,
    className?: string
}
const title = ({children,className}:Props) => {
  return (
    <h2 className={cn('text-xl text-lightPurple font-bold mb-4' , className)}>{children}</h2>
  )
}

export default title