//custom components imports
import PrimaryButton from '@/components/Button/button';
import { Button } from '@/components/ui/button';
import SocialButton from '@/components/Button/social-button';
import PrimaryInput from '@/components/Input/PrimaryInput';

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

      <PrimaryInput
        type='text'
        placeHolder='Enter Email'
        className='mt-14'
      />

      <PrimaryButton
        text='Sign In'
        className=' bg-customPurple rounded-3xl mt-14'
      />

      <div
        className='py-3 mt-4 mb-4 
         flex items-center text-sm before:flex-1 before:border-t before:border-white before:me-6 after:flex-1 after:border-t after:border-white after:ms-6 dark:text-customGray dark:before:border-customGray dark:after:border-customGray'
      >
        OR
      </div>

      {/* //Social buttons defined in a component */}
      <SocialButton isGoogle={true} />
      <SocialButton isFacebook={true} />
      <SocialButton isApple={true} />
    </>
  );
}
