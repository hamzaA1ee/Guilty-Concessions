import PrimaryButton from '@/components/Button/button';
import PrimaryInput from '@/components/Input/PrimaryInput';

export default function ChangePasswordView() {
  return (
    <div className='w-full flex flex-col gap-5'>
      <PrimaryInput placeHolder='Current Password' />
      <PrimaryInput placeHolder='New Password' />
      <PrimaryInput placeHolder='Confirm New Password' />
      <PrimaryButton
        text='Change Password'
        className='rounded-3xl bg-customPurple'
      />
    </div>
  );
}
