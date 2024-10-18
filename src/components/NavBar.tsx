'use client';

//Next Imports
import Image from 'next/image';

//Image imports
import logo from '@/../public/assets/images/Group 60.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SideSheet } from './Sheet';

//custom imports

export default function NavBarComponent() {
  const pathName: string = usePathname().split('/')[2];
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
          {pathName !== 'login' && (
            <Link
              href={pathName?.includes('auth') ? '/login' : '/auth/login'}
              className='inline-flex items-center justify-center w-[127px] h-[37px] font-bold rounded-2xl  shadow-both-custom'
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
