'use client';

//Next Imports
import Image from 'next/image';

//Image imports
import logo from '../../public/assets/images/Group 60.png';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBarComponent() {
  const pathName: string = usePathname().split('/')[2];
  console.log(pathName);
  return (
    <>
      <div className='flex items-center justify-center fixed w-full'>
        <div className='w-[90%] h-[101px] flex items-center justify-between'>
          <div className='max-w-[209px] h-[38px] flex items-center justify-around'>
            <Image
              src={logo}
              width={38}
              height={18}
              alt='logo'
            ></Image>
            <h4 className='font-bold ml-2 '>Guilty Concessions</h4>
          </div>
          <div>
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
