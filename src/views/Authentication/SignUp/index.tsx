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
import bubbleOne from '../../../../public/assets/images/Oval Copy 2.png';
import bubbleTwo from '../../../../public/assets/images/Oval Copy 3.png';
import oval from '../../../../public/assets/images/Oval.png';
import bottomOval from '../../../../public/assets/images/Oval Copy.png';

const SignUpView = () => {
  const [step, setStep] = useState<number>(2);
  return (
    <Fragment>
      <div className='flex items-center justify-center w-full h-screen  '>
        <div className='flex items-center justify-between w-full'>
          <div className={`w-[491px] ml-36 h-3/4 ${step > 1 && 'mb-20'} `}>
            {' '}
            {/*just change the forms here from now on.*/}
            {/* <StepOneView /> */}
            {/* <StepTwoView />   */}
            {/* <ConfirmEmailView /> */}
            <VerfiyEmailView />
          </div>
          <div>
            <MaskGroupView />
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
        <div className='absolute bottom-30 left-16'>
          <Image
            src={bubbleTwo}
            width={53}
            height={51}
            alt='bubble'
          ></Image>
        </div>
        <div className='absolute bottom-3 left-5'>
          <Image
            src={bubbleOne}
            width={100}
            height={98}
            alt='bubble'
          ></Image>
        </div>
        <div className='absolute bottom-0 right-0'>
          <Image
            src={bottomOval}
            width={168}
            height={159}
            alt='bubble'
          ></Image>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUpView;
