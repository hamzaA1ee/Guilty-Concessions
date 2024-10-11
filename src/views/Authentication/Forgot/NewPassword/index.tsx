import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Fragment } from 'react';

export default function NewPasswordView() {
  return (
    <Fragment>
      <h1 className='text-[28px] font-bold'>Set New Password</h1>
      <p className='font-medium text-[14px] text-customGray '>
        Enter email associated with your account
      </p>

      <input
        type='text'
        className='w-full h-[38px] pl-4 border -2 border-customGrayTwo mt-8 rounded-3xl text-customGrayTwo font-medium text-[14px]'
        placeholder='New Password'
      />
      <input
        type='text'
        className='w-full h-[38px] pl-4 border -2 border-customGrayTwo mt-8 rounded-3xl text-customGrayTwo font-medium text-[14px]'
        placeholder='Confirm New Password'
      />

      <Button className='text-center mt-6 text-customWhite font-bold text-[14px] w-full h-[38px] bg-customPurple rounded-3xl '>
        Update Password
      </Button>
    </Fragment>
  );
}