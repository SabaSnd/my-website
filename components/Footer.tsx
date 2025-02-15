import cn from 'classnames'
import React, { FC } from 'react'
import SocialFollow from './SocialFollow'

interface FooterProps {
  className?: string
  chidlren?: React.ReactNode
}

const Footer: FC<FooterProps> = () => {
  return (
    <footer
      className={cn(
        'flex flex-col gap-2 justify-center',
        'items-center  max-w-2xl md:px-0 px-8 mx-auto w-full pb-8'
      )}
    >
      <hr
        className={cn(
          'w-full border-1 border-gray-200',
          'dark:border-gray-600 mb-8'
        )}
      />
      <SocialFollow />
      <div className='text-sm'>© 2023-2024 Saba Safarnezhad</div>
    </footer>
  )
}

export default Footer
