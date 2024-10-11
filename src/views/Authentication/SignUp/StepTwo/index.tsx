//custom components imports
import { Button } from '@/components/ui/button';
import PrimaryButton from '@/components/Button/button';
//views imports

//

//next imports
//logos imports

export default function StepTwoView() {
  return (
    <>
      <h1 className='text-[28px] font-bold'>Sign Up</h1>
      <p className='font-medium text-[14px] text-customGray '>
        Enter your details to proceed further
      </p>

      <div className='flex items-center justify-evenly mt-8 mb-6 gap-4 '>
        <input
          type='text'
          className='w-full h-[38px]  pl-4 border-2 border-customGrayTwo   rounded-3xl text-customGrayTwo font-medium text-[14px]'
          placeholder='First Name'
        />
        <input
          type='text'
          className='w-full h-[38px] pl-4 border-2 border-customGrayTwo rounded-3xl text-customGrayTwo font-medium text-[14px]'
          placeholder='Last Name'
        />
      </div>
      <input
        type='text'
        className='w-full h-[38px]  pl-4 border-2 border-customGrayTwo   rounded-3xl text-customGrayTwo font-medium text-[14px]'
        placeholder='Business Name'
      />

      <div className='flex items-center justify-evenly mt-4 gap-4 '>
        <input
          type='text'
          className='w-[40%] h-[38px]  pl-4 border -2 border-customGrayTwo   rounded-3xl text-customGrayTwo font-medium text-[14px]'
          placeholder='Address'
        />
        <input
          type='text'
          className='w-[30%] h-[38px]  pl-4 border-2 border-customGrayTwo rounded-3xl text-customGrayTwo font-medium text-[14px]'
          placeholder='State'
        />

        <input
          type='text'
          className='w-[40%] h-[38px] pl-4 border-2 border-customGrayTwo rounded-3xl text-customGrayTwo font-medium text-[14px]'
          placeholder='Zip Code'
        />
      </div>
      <div className='flex items-center justify-evenly mt-4 gap-4 '>
        <input
          type='text'
          className='w-full h-[38px]  pl-4 border -2 border-customGrayTwo   rounded-3xl text-customGrayTwo font-medium text-[14px]'
          placeholder='Phone Number'
        />
        <input
          type='text'
          className='w-full h-[38px] pl-4 border-2 border-customGrayTwo rounded-3xl text-customGrayTwo font-medium text-[14px]'
          placeholder='Email'
        />
      </div>

      <input
        type='text'
        className='w-full h-[38px] mt-4  pl-4 border-2 border-customGrayTwo   rounded-3xl text-customGrayTwo font-medium text-[14px]'
        placeholder='Password'
      />
      <input
        type='text'
        className='w-full h-[38px] mt-4 pl-4 border -2 border-customGrayTwo   rounded-3xl text-customGrayTwo font-medium text-[14px]'
        placeholder='Confirm Password'
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
        className='text-center mt-4 text-customWhite font-bold text-[14px] w-full h-[40px] bg-customPurple rounded-3xl '
      />
    </>
  );
}
