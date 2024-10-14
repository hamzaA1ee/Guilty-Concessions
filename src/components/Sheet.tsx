'use client';

import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { useState } from 'react';

interface ISheet {
  side?: string;
  buttonText?: string;
}
export function SideSheet({ buttonText }: ISheet) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='grid grid-cols-1 gap-2'>
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SheetTrigger
          asChild
          className='cursor-pointer sm:hidden block'
        >
          <Button onClick={handleOpenClick}>
            {buttonText || (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
                width={24}
                height={24}
              >
                <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' />
              </svg>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent
          side={'left'}
          className='bg-customBack'
        >
          <div className='grid gap-4 py-4 mt-10'>
            <div className='flex justify-start h-[39px] items-center pl-5 gap-4'>
              <Link
                onClick={handleOpenClick}
                href='./login'
                className='font-normal  text-[16px] text-neutralGrey'
              >
                Login
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
