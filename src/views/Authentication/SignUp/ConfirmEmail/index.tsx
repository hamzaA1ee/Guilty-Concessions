//custom components imports

import PrimaryButton from '@/components/Button/button';

//views imports

//

//next imports
import Link from 'next/link';
//logos imports

export default function ConfirmEmailView() {
  return (
    <>
      <h1 className='text-[28px] font-bold'>Confirm Email</h1>
      <p className='font-medium text-[14px] text-customGray  '>
        We have sent you a confirmation email, please check your email
        XXXX@XXX.com and then login to your account.
      </p>

      <input
        type='text'
        className='w-full h-[38px] mr-4 pl-4 mt-8 border-2 border-customGrayTwo   rounded-3xl text-customGrayTwo font-medium text-[14px]'
        placeholder='Business Name'
      />
      <input
        type='text'
        className='w-full h-[38px] mr-4 pl-4 border-2 mt-6 border-customGrayTwo   rounded-3xl text-customGrayTwo font-medium text-[14px]'
        placeholder='Business Name'
      />

      <div className='flex items-center justify-between mt-4'>
        <div className='flex  items-center'>
          <input
            id='default-radio-1'
            type='radio'
            value=''
            name='default-radio'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            htmlFor='default-radio-1'
            className='ms-2 text-[14px]  font-bold text-customBrown '
          >
            Remember me
          </label>
        </div>

        <Link
          href={'#'}
          className='text-customPurple font-bold text-[14px]'
        >
          Forget Password
        </Link>
      </div>
      <PrimaryButton
        text='Login'
        className='mt-4 bg-customPurple rounded-3xl '
      />
    </>
  );
}
