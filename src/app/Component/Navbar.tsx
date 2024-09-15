import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '../../../Constent'
import Button from './Button'


const Navbar = () => {
  return (
    <nav className=' flexBetween max-container padding-container py-5 z-30 relative '>
        <Link href='/'>
            <Image 
            src="/hilink-logo.svg"
            alt='Logo'
            width={74}
            height={29}
            />
   </Link>
            <ul className='hidden h-full gap-12 lg:flex'>
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className='regular-16 text-gray-50 flexCenter hover:font-bold transition-all pb-1.5 cursor-pointer'
                   >
                  {link.label}
                </Link>
              ))}
            </ul>

            <div className='lg:flexCenter hidden'>
              <Button
              type='button'
              title='Login'
              icon='/user.svg'
              variant='btn_dark_green'
              />
            </div>

            <Image 
              src='/menu.svg'
              alt='menu'
              height={34}
              width={34}
              className='inline-block cursor-pointer lg:hidden'
            />
    </nav>
  )
}

export default Navbar
