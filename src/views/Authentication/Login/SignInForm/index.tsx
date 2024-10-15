//next imports
import Link from 'next/link';

//react imports
import { Fragment } from 'react';

//custom imports
import PrimaryButton from '@/components/Button/button';
import SocialButton from '@/components/Button/social-button';
import PrimaryInput from '@/components/Input/PrimaryInput';
import HeaderText from '@/components/HeaderText';

export default function SignInFormView() {
  return (
    <Fragment>
      <HeaderText
        headerText='Sign In'
        paraText='Enter your details to proceed further'
      />

      <PrimaryInput
        className='mt-8'
        placeHolder='Enter Email'
      />
      <PrimaryInput
        className=' mt-4'
        placeHolder='Enter Password'
      />

      <div className='flex items-center justify-between mt-6'>
        <div className='flex  items-center'>
          <PrimaryInput isRadio={true} />
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
