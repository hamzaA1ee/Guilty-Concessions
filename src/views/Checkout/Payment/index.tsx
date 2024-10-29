import PrimaryButton from '@/components/Button/button';
import HeaderText from '@/components/HeaderText';
import TextAndLogo from '@/components/TextAndLogo';

export default function PaymentView() {
  return (
    <>
      <div className=' flex flex-col w-full items-start    h-full gap-6 '>
        <HeaderText
          headerClass='font-bold text-customTextFive'
          headerText='Delivery Informations'
        />
        <h4>Delivery Address</h4>
        <div className='flex flex-col w-full items-start justify-center xl:pl-4 gap-1 '>
          {/* this div is for storing address information */}
          <div className='flex items-center justify-between  w-full'>
            {/* this div is for name and the edit logo */}
            <p className='text-customTextThree text-[12px]'>John Applessd</p>
            <TextAndLogo
              text='edit'
              isEdit={true}
            />
          </div>
          <p className='text-customTextThree text-[12px] font-light'>
            johnsaeed@gmail.com
          </p>
          <p className='text-customTextThree text-[12px] font-light'>
            1 chapel hill
          </p>
          <p className='text-customTextThree text-[12px] font-light'>heswall</p>
          <p className='text-customTextThree text-[12px] font-light'>
            bournemouth
          </p>
          <p className='text-customTextThree text-[12px] font-light'>bh1 1aa</p>
        </div>
        <h4>Payment</h4>
        <div className='flex flex-col items-start gap-2'>
          {/* this div is for payment method and all that */}
          <p className='text-[12px] text-customTextThree'>Payment Method</p>
          <p className='text-[12px] text-customTextThree xl:ml-4'>
            GuiltyConcession Balance
          </p>
        </div>
        <hr className='w-full border-customGrayFive' />
        <div className='flex items-center justify-center gap-4'>
          <div className='flex flex-col items-end gap-2'>
            <p className='text-[12px] text-customTextThree'>Car Total</p>
            <p className='text-[16px] text-customTextThree'>Total</p>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <p className='text-[14px] text-customTextThree'>$0000,00</p>
            <p className='font-bold text-[16px] text-customTextThree'>
              $0,00000
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-4 w-full'>
        <div className='flex items-center justify-center gap-2'>
          <input
            id='default-checkbox'
            type='checkbox'
            value=''
          />
          <label
            htmlFor='default-checkbox'
            className='text-customTextThree text-[12px]   '
          >
            Lorem ipsum dolor sit amet, consectetur{' '}
          </label>{' '}
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input
            id='default-checkbox'
            type='checkbox'
            value=''
          />
          <label
            htmlFor='default-checkbox'
            className='text-customTextThree text-[12px]   '
          >
            Lorem ipsum dolor sit amet, consectetur{' '}
          </label>
        </div>
        <PrimaryButton
          text='Pay'
          className='rounded-3xl bg-customPurple font-normal'
        />
      </div>
    </>
  );
}
