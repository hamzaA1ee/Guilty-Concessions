//custom components imports

import HeaderText from '@/components/HeaderText';
import PrimaryInput from '@/components/Input/PrimaryInput';

//views imports

//

//next imports

//logos imports

export default function ConfirmEmailView() {
  return (
    <>
      <HeaderText
        headerText='Indulge'
        headerClass='text-[64px]'
      />

      <div className='w-full max-w-sm min-w-[200px] mt-[10%]'>
        <div className='relative'>
          <PrimaryInput placeHolder='Enter User Mobile Number' />
          <button
            className='absolute right-1  top-1 rounded-full bg-customPurple py-1 px-2.5 border border-transparent text-center text-sm text-white  shadow-sm '
            type='button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={18}
              height={20}
              viewBox='0 0 448 512'
              fill='white'
            >
              <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
