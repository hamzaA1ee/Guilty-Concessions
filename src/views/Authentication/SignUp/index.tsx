'use client';
// React Imports
import { Fragment, useState } from 'react';

//view imports
import StepOneView from './StepOne';
import StepTwoView from './StepTwo';
import MaskGroupView from './MaskGroup';
import ConfirmEmailView from './ConfirmEmail';
import VerfiyEmailView from './VerifyEmail';
//next imports
import Image from 'next/image';

//image imports

import oval from '../../../../public/assets/images/Oval.png';

const SignUpView = () => {
  const [step, setStep] = useState<number>(4);
  return (
    <Fragment>
      <div className='flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-hidden  '>
        <div className='flex items-start justify-between w-full'>
          <div className={`w-[491px] ml-36 h-3/4 ${step <= 1 && 'mt-30  '}  `}>
            {' '}
            {/*just change the forms here from now on.*/}
            {step == 1 && <StepOneView />}
            {step == 2 && <StepTwoView />}
            {step == 3 && <ConfirmEmailView />}
            {step == 4 && <VerfiyEmailView />}
          </div>
          <div>
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
    </Fragment>
  );
};

export default SignUpView;
