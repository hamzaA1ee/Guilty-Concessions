import HeaderText from '@/components/HeaderText';
import PrimaryInput from '@/components/Input/PrimaryInput';
import { Button } from '@/components/ui/button';

import { Fragment } from 'react';

export default function NewPasswordView() {
  return (
    <Fragment>
      <HeaderText
        headerText='Set New Password'
        paraText='Enter email associated with your account'
      />
      <PrimaryInput
        className='mt-8'
        placeHolder='New Password'
      />
      <PrimaryInput
        className='mt-8'
        placeHolder='Confirm New Password'
      />

      <Button className='text-center mt-6 text-customWhite font-bold text-[14px] w-full h-[38px] bg-customPurple rounded-3xl '>
        Update Password
      </Button>
    </Fragment>
  );
}
