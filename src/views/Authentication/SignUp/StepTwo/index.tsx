//custom components imports

import PrimaryButton from '@/components/Button/button';
import HeaderText from '@/components/HeaderText';
import PrimaryInput from '@/components/Input/PrimaryInput';
//views imports

//

//next imports
//logos imports

export default function StepTwoView() {
  return (
    <>
      <HeaderText
        headerText='Sign Up'
        paraText='Enter your details to proceed further'
      />

      <div className='flex items-center justify-evenly mt-8 mb-6 gap-4 '>
        <PrimaryInput placeHolder='First Name' />
        <PrimaryInput placeHolder='Last Name' />
      </div>
      <PrimaryInput placeHolder='Business Name' />

      {/* <div className='flex items-center sm:justify-evenly mt-4 sm:flex-nowrap flex-wrap gap-4 '>
        <PrimaryInput
          type='text'
          className='w-full'
          placeHolder='Address'
        />
        <div className='flex items-center bg-blue-200 justify-evenly w-ful gap-4 sm:flex-none sm:justify-normal '>
          <PrimaryInput
            type='text'
            className='sm:w-[30%]'
            placeHolder='State'
          />

          <PrimaryInput
            type='text'
            className='sm:w-[40%]'
            placeHolder='Zip Code'
          />
        </div>
      </div> */}

      <div className='flex items-center mt-4 flex-wrap gap-4 sm:justify-evenly sm:flex-nowrap'>
        <PrimaryInput
          className='sm:w-[40%] '
          placeHolder='Address'
        />
        <div className='flex w-full gap-4 sm:flex-1'>
          <PrimaryInput
            className='w-full'
            placeHolder='State'
          />
          <PrimaryInput
            className='w-full'
            placeHolder='Zip Code'
          />
        </div>
      </div>

      <div className='flex items-center justify-evenly mt-4 gap-4 flex-wrap sm:flex-nowrap '>
        <PrimaryInput placeHolder='Phone Number' />
        <PrimaryInput placeHolder='Email' />
      </div>

      <PrimaryInput
        placeHolder='Password'
        className='mt-4'
      />
      <PrimaryInput
        placeHolder='Confirm Password'
        className='mt-4'
      />

      <div className='flex items-center mt-4'>
        <input
          id='default-radio-1'
          type='checkbox'
          value=''
          name='default-radio'
          className='w-4 h-4 border-2 cursor-pointer border-gray-300 rounded-full  appearance-none checked:bg-[#3A3335] checked:bg-opacity-10 focus:outline-none'
        />

        <label
          htmlFor='default-radio-1'
          className='ms-2 text-sm font-inter font-bold text-[14px] text-customGray '
        >
          I agree with terms and conditions
        </label>
      </div>

      <PrimaryButton
        text='Next >'
        className=' sm:mt-4 mt-20 text-customWhite  bg-customPurple rounded-3xl '
      />
    </>
  );
}
