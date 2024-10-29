//next imports
import Link from 'next/link';

//react imports
import { Fragment } from 'react';

//custom imports
import PrimaryButton from '@/components/Button/button';
import SocialButton from '@/components/Button/social-button';
import PrimaryInput from '@/components/Input/PrimaryInput';
import HeaderText from '@/components/HeaderText';

import { Trans } from 'react-i18next';
import Hr from '@/components/Hr';
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
            <Trans i18nKey={'Remember me'}>Remember me</Trans>
          </label>
        </div>

        <Link
          href={'/auth/forgot'}
          className='text-customPurple font-bold text-[14px]'
        >
          <Trans i18nKey={'Forgot Password'}>Forgot Password</Trans>
        </Link>
      </div>

      <PrimaryButton
        text='Sign In'
        className=' mt-6 bg-customPurple rounded-3xl '
      />

      <Hr />
      <SocialButton isGoogle={true} />
      <SocialButton isFacebook={true} />
      <SocialButton isApple={true} />
      <div className='flex items-center justify-center w-full text-[17px] mt-4'>
        <span className='font-normal mr-3 '>
          <Trans i18nKey={'Not a member?'}>{'Not a member?'}</Trans>{' '}
        </span>
        <Link
          href={'./signup'}
          className='font-bold text-customPurple '
        >
          <Trans i18nKey={'Sign Up'}>Sign Up</Trans>
        </Link>
      </div>
    </Fragment>
  );
}
