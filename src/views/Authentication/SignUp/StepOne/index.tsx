//custom components imports
import PrimaryButton from '@/components/Button/button';
import SocialButton from '@/components/Button/social-button';
import HeaderText from '@/components/HeaderText';
import Hr from '@/components/Hr';
import PrimaryInput from '@/components/Input/PrimaryInput';

//views imports

//

//next imports
//logos imports

export default function StepOneView() {
  return (
    <>
      <HeaderText
        headerText='Sign Up'
        paraText='Enter your details to proceed further'
      />

      <PrimaryInput
        placeHolder='Enter Email'
        className='mt-14'
      />

      <PrimaryButton
        text='Sign In'
        className=' bg-customPurple rounded-3xl mt-14'
      />

      <Hr />
      {/* //Social buttons defined in a component */}
      <SocialButton isGoogle={true} />
      <SocialButton isFacebook={true} />
      <SocialButton isApple={true} />
    </>
  );
}
