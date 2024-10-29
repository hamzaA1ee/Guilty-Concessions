'use client';
import PrimaryButton from '@/components/Button/button';
import SuccessMessage from '@/components/SuccessMessage';

export default function SuccessMessageView() {
  return (
    <>
      <SuccessMessage
        msg='Completed Successfully'
        email='email@example.com'
      />
      <div className='w-[220px]'>
        <PrimaryButton
          text='My orders'
          className='rounded-3xl bg-customPurple font-normal'
        />
      </div>
      <h3>What Happen Next?</h3>
    </>
  );
}
