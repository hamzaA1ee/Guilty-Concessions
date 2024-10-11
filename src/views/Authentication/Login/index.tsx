'use client';

// React Imports
import { FC, Fragment } from 'react';
import SignInFormView from './SignInForm';
import LoginMaskGroup from './MaskGroup';

// React Query Imports

interface ISignInViewProps {}

const SignInView: FC<ISignInViewProps> = () => {
  /**
   * @description Handles the login process for the user
   *
   * @returns {void}
   */

  return (
    <div className='flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-hidden  '>
      <div className='flex items-start gap-64 h-full  mt-[150px] w-full'>
        <div className={`max-w-[491px] ml-36 h-3/4   `}>
          <SignInFormView />
        </div>
        <div className='h-full '>
          <LoginMaskGroup />
        </div>
      </div>

      {/* //below the fixed shapes of oval that are used in desgin */}
    </div>
  );
};

export default SignInView;
