import Image from 'next/image';

//assets imports
import bitmapThree from '@/../public/assets/images/bitmapThree.png';
import HeaderText from '@/components/HeaderText';
import ChangeProfileAvatar from '@/components/ChangeProfileAvatar';
import PrimaryInput from '@/components/Input/PrimaryInput';
import { Radio } from '@/components/Input/Radio';
import PrimaryButton from '@/components/Button/button';

export default function SendFundsView() {
  const radios = ['Funds Transfer', 'Self Top Up'];
  return (
    <>
      <div className='w-full h-full flex  items-center justify-center sm:justify-end  md:order-1 order-2 '>
        {' '}
        <div className='w-[80%]  sm:pl-4  '>
          <HeaderText
            headerText='Indulge'
            textSize='sm:text-[78px] text-[32px]'
          />
          <div className='flex  items-center  gap-4'>
            <ChangeProfileAvatar />
          </div>
          <div className='flex flex-col  sm:pl-14  gap-2 md:w-[65%]  lg:w-[45%] '>
            <div>
              <label className='text-[12px] text-customTextThree'>
                My Phone Number
              </label>
              <PrimaryInput />
            </div>
            <div>
              <label className='text-[12px] text-customTextThree'>
                Amount to Top Up
              </label>

              <PrimaryInput />
            </div>
          </div>
          <Radio
            className='sm:pl-14 mt-4'
            text={radios}
          />
          <PrimaryButton
            text='Go'
            className='rounded-3xl bg-customPurple sm:ml-14 mt-6 sm:w-[30%]'
          />
        </div>
      </div>
      <div className='w-full  h-[90%]  flex justify-end items-end   md:order-2 '>
        <div className=' lg:w-[70%] lg:h-[80%] ] w-full h-full  flex items-center   '>
          <Image
            src={bitmapThree}
            width={1600}
            height={500}
            style={{ objectFit: 'contain' }}
            alt='lady laughing'
          />
        </div>
      </div>
    </>
  );
}
