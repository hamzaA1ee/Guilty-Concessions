'use client';

// React Imports
import { FC } from 'react';
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
      <div className='flex items-start gap-4 h-full sm:mt-[150px] mt-72 lg:w-11/12 md:w-3/5 w-full'>
        <div className={`w-full h-3/4 flex justify-center  `}>
          <div className='w-[70%] '>
            <SignInFormView />
          </div>
        </div>
        <div className={`h-full w-full lg:block hidden  `}>
          <LoginMaskGroup />
        </div>
      </div>

      {/* //below the fixed shapes of oval that are used in desgin */}
    </div>
  );
};

export default SignInView;
