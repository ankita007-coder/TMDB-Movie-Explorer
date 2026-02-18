import React from 'react'

interface HorizontalScrollProps{
    children: React.ReactNode
}
export default function HorizontalScroll({children}:HorizontalScrollProps) {
  return (
    <div className='p-4 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide'>
      {children}
    </div>
  )
}
