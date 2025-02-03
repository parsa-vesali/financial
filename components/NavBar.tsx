import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import Icons from './global/icons'


const NavBar = () => {
  const user = false
  return (
    <header className='px-4 h-16 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50'>
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href='/' className='flex items-center gap-2'>
            <Icons.logo className='w-8 h-8' />
            <span className='text-lg font-Dana-Medium'>
            رایکانت
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className='flex items-center justify-center gap-8'>
            <li className='hover:text-foreground/80'>
              <Link href='#'>صفحه اصلی</Link>
            </li>

            <li className='hover:text-foreground/80'>
              <Link href='#'>قیمت‌ها</Link>
            </li>

            <li className='hover:text-foreground/80'>
              <Link href='#'>اخبار</Link>
            </li>

            <li className='hover:text-foreground/80'>
              <Link href='#'>تماس با ما</Link>
            </li>

          </ul>
        </nav>


        <div className="flex items-center gap-4">
          {
            user ? (
              "user btn"
            ) : (
              <>
                <Link href='/sign-in' className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
                  ورود
                </Link>
                <Link href="/sign-up" className={buttonVariants({ size: 'sm', className: ' hidden md:flex' })}>
                  ثبت نام
                </Link>
              </>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default NavBar