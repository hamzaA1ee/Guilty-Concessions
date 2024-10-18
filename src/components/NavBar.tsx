'use client';

//Next Imports
import Image from 'next/image';

//Image imports
import logo from '@/../public/assets/images/Group 60.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SideSheet } from './Sheet';
import { getCookieFn } from '@/utils/storage.util';
import ProfileAvatar from './ProfileAvatar';

//custom imports

export default function NavBarComponent() {
  const pathName: string = usePathname().split('/')[2];
  const token = getCookieFn('accessToken');
  return (
    <div className='flex items-center justify-start sm:justify-center fixed w-full'>
      <div className='w-[90%] sm:h-[101px] h-[200px] flex items-center justify-between'>
        <div className='max-w-[309px] h-[38px] flex items-center justify-around'>
          <SideSheet />
          <Image
            src={logo}
            width={38}
            height={18}
            alt='logo'
          ></Image>
          <h4 className='font-bold ml-2 '>Guilty Concessions</h4>
        </div>
        <div className='hidden sm:block'>
          {token ? (
            <div className='flex items-center justify-between w-[115px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                width={24}
                height={24}
                fill='#4A4A4A'
              >
                <path d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                fill='#4A4A4A'
                viewBox='0 0 448 512'
              >
                <path d='M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z' />
              </svg>
              <ProfileAvatar />
            </div>
          ) : (
            <>
              {pathName !== 'login' && (
                <Link
                  href={pathName?.includes('auth') ? '/login' : '/auth/login'}
                  className='inline-flex items-center justify-center w-[127px] h-[37px] font-bold rounded-2xl  shadow-both-custom'
                >
                  LOGIN
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
