//next imports
import Link from 'next/link';

//react imports
import { Fragment } from 'react';

//custom imports
import PrimaryButton from '@/components/Button/button';
import { Button } from '@/components/ui/button';
import SocialButton from '@/components/Button/social-button';

export default function SignInFormView() {
  return (
    <Fragment>
      <h1 className='text-[28px] font-bold'>Sign In</h1>
      <p className='font-medium text-[14px] text-customGray '>
        Enter your details to proceed further
      </p>

      <input
        type='text'
        className='w-full h-[38px] pl-4 border-2 border-customGray mt-8 rounded-3xl text-customGray font-medium text-[14px]'
        placeholder='Enter Email'
      />
      <input
        type='text'
        className='w-full h-[38px] pl-4 border-2 border-customGray mt-4  rounded-3xl text-customGray font-medium text-[14px]'
        placeholder='Enter Password'
      />

      <div className='flex items-center justify-between mt-6'>
        <div className='flex  items-center'>
          <input
            id='default-radio-1'
            type='radio'
            value=''
            name='default-radio'
            className='w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='default-radio-1'
            className='ms-2 text-[14px]  font-bold text-customBrown '
          >
            Remember me
          </label>
        </div>

        <Link
          href={'/auth/forgot'}
          className='text-customPurple font-bold text-[14px]'
        >
          Forget Password
        </Link>
      </div>

      <PrimaryButton
        text='Sign In'
        className=' mt-6 bg-customPurple rounded-3xl '
      />

      <div
        className='py-3 mt-4 
         flex items-center text-sm before:flex-1 before:border-t before:border-white before:me-6 after:flex-1 after:border-t after:border-white after:ms-6 dark:text-customGray dark:before:border-customGray dark:after:border-customGray'
      >
        OR
      </div>
      <SocialButton isGoogle={true} />
      <SocialButton isFacebook={true} />
      <SocialButton isApple={true} />
      <div className='flex items-center justify-center w-full text-[17px] mt-4'>
        <span className='font-normal mr-3 '>{'Not a member?    '} </span>
        <Link
          href={'./signup'}
          className='font-bold text-customPurple '
        >
          Sign Up
        </Link>
      </div>
    </Fragment>
  );
}
