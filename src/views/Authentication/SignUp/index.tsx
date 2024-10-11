'use client';
// React Imports
import { useState } from 'react';

//view imports
import StepOneView from './StepOne';
import StepTwoView from './StepTwo';
import MaskGroupView from './MaskGroup';
import ConfirmEmailView from './ConfirmEmail';
import VerfiyEmailView from './VerifyEmail';
//next imports
import Image from 'next/image';

//image imports

import oval from '@/../public/assets/images/Oval.png';

const SignUpView = () => {
  const [step] = useState<number>(2);
  return (
    <div className='flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-hidden  '>
      <div className='flex items-start lg:ml-32 gap-4 h-full mt-[150px]   lg:w-11/12 md:w-3/5 w-4/5'>
        <div className={`w-full h-3/4 flex justify-center  `}>
          <div className='w-4/5 '>
            {' '}
            {/*just change the forms here from now on.*/}
            {step == 1 && <StepOneView />}
            {step == 2 && <StepTwoView />}
            {step == 3 && <ConfirmEmailView />}
            {step == 4 && <VerfiyEmailView />}
          </div>
        </div>
        <div
          className={`h-full w-full lg:block hidden  ${step > 1 && '  flex justify-end '} `}
        >
          <MaskGroupView step={step} />
        </div>
      </div>

      {/* //below the fixed shapes of oval that are used in desgin */}
      <div className='absolute top-24 left-0'>
        {step > 1 && (
          <Image
            src={oval}
            width={100}
            height={97}
            alt='bubble'
          ></Image>
        )}
      </div>
    </div>
  );
};

export default SignUpView;
