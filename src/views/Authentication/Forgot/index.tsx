'use client';
// React Imports
import { Fragment, useState } from 'react';

//view imports

import ResetPasswordView from './ResetPassword';
//next imports

import NewPasswordView from './NewPassword';
//image imports

const ForgotPasswordView = () => {
  const [step] = useState<number>(2);
  return (
    <Fragment>
      {step == 1 && <ResetPasswordView />}
      {step == 2 && <NewPasswordView />}
    </Fragment>
  );
};

export default ForgotPasswordView;
