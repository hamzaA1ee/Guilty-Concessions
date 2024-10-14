//custom components imports
import PrimaryButton from '@/components/Button/button';
import { Button } from '@/components/ui/button';
import SocialButton from '@/components/Button/social-button';

//views imports

//

//next imports
//logos imports

export default function StepOneView() {
  return (
    <>
      <h1 className='text-[28px] font-bold'>Sign Up</h1>
      <p className='font-medium text-[14px] text-customGray '>
        Enter your details to proceed further
      </p>

      <input
        type='text'
        className='w-full h-[38px] pl-4 border-2 border-customGrayTwo mt-14 mb-14 rounded-3xl text-customGrayTwo font-medium text-[14px]'
        placeholder='Enter Email'
      />

      <PrimaryButton
        text='Sign In'
        className=' bg-customPurple rounded-3xl '
      />

      <div
        className='py-3 mt-4 mb-4 
         flex items-center text-sm before:flex-1 before:border-t before:border-white before:me-6 after:flex-1 after:border-t after:border-white after:ms-6 dark:text-customGray dark:before:border-customGray dark:after:border-customGray'
      >
        OR
      </div>

      {/* //Social buttons defined in a component */}
      <SocialButton isGoogle={true}  />
      <SocialButton isFacebook={true}/>
      <SocialButton isApple={true} />
    </>
  );
}
