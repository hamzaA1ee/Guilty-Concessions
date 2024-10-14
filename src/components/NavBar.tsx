'use client';

//Next Imports
import Image from 'next/image';

//Image imports
import logo from '../../public/assets/images/Group 60.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui/button';

//custom imports

export default function NavBarComponent() {
  const pathName: string = usePathname().split('/')[2];
  console.log(pathName);
  return (
    <>
      <div className='flex items-center justify-center fixed w-full'>
        <div className='w-[90%] sm:h-[101px] h-[200px] flex items-center justify-between'>
          <div className='max-w-[309px] h-[38px] flex items-center justify-around'>
            <Button className='sm:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
                width={24}
                height={24}
              >
                <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' />
              </svg>
            </Button>
            <Image
              src={logo}
              width={38}
              height={18}
              alt='logo'
            ></Image>
            <h4 className='font-bold ml-2 '>Guilty Concessions</h4>
          </div>
          <div className='hidden sm:block'>
            {pathName !== 'login' && (
              <Link
                href='./login'
                className='inline-flex items-center justify-center w-[127px] h-[37px] font-bold rounded-2xl  shadow-both-custom'
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
