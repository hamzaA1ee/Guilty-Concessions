import PrimaryButton from '@/components/Button/button';
import HeaderText from '@/components/HeaderText';
import PrimaryInput from '@/components/Input/PrimaryInput';
import { Button } from '@/components/ui/button';

import { Fragment } from 'react';

export default function ResetPasswordView() {
  return (
    <Fragment>
      <HeaderText
        headerText='Forgot Password'
        paraText='Enter email associated with your account'
      />

      <PrimaryInput
        className=' mt-8'
        placeHolder='Enter Email'
      />

      <PrimaryButton
        text='Continue'
        className='mt-6 bg-customPurple rounded-3xl '
      />
    </Fragment>
  );
}
