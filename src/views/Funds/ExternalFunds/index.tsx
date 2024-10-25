//custom component imports
import PrimaryButton from '@/components/Button/button';
import HeaderText from '@/components/HeaderText';
import { CheckBox } from '@/components/Input/CheckBox';
import PrimaryInput from '@/components/Input/PrimaryInput';
import { Radio } from '@/components/Input/Radio';
import ProfileAvatar from '@/components/ProfileAvatar';

export default function ExternalFundsView() {
  const radio: string[] = ['PayPal', 'Apple Pay', 'Credit Card'];
  return (
    <>
      <div className='w-full  flex flex-col sm:gap-5'>
        <HeaderText
          headerText='You are adding funds to:'
          textSize='xl:text-[32px] text-[24px]'
        />
        <div className='flex items-center  gap-4'>
          <ProfileAvatar
            height={76}
            width={76}
          />
          <a
            target='_blank'
            href={'#'}
            className='font-medium text-xs sm:text-sm text-customGray break-all '
          >
            guiltyconcessions.com/staceymathews
          </a>
        </div>
        <div className='flex flex-col sm:w-[85%]  gap-2'>
          <HeaderText
            headerText='Confirm Your Contact Details'
            textSize='xl:text-[32px] text-[24px]'
          />
          <div className='flex flex-col gap-4'>
            <PrimaryInput placeHolder='Enter Email' />
            <PrimaryInput placeHolder='Phone Number' />
          </div>
        </div>
      </div>
      <div className='w-full   h-full '>
        <HeaderText
          headerText='Amount'
          textSize='xl:text-[32px] text-[24px]'
        />
        <PrimaryInput
          placeHolder='$ 0000.00'
          width='70%'
        />
        <HeaderText
          headerText='Payment'
          textSize='xl:text-[32px] text-[24px]'
        />
        <div className='w-full flex flex-col gap-5'>
          <p className='text-[15px] text-customTextFive'>Payment Method</p>

          <Radio text={radio} />

          <PrimaryInput
            placeHolder='Name on Card'
            borderBottom={true}
            className='rounded-none  pl-0'
            width={'50%'}
          />
          <PrimaryInput
            placeHolder='Card Number'
            borderBottom={true}
            className='rounded-none  pl-0'
            width={'50%'}
          />

          <div className='flex  gap-8 '>
            <div className='flex sm:w-[50%] md:w-[30%] flex-col gap-2 border-'>
              <p className='text-[15px] text-customTextFive'>
                Expire Date (MM/YY)
              </p>
              <div className='flex  gap-4 '>
                <PrimaryInput
                  width='50%'
                  placeHolder='MM'
                  className='text-center pl-0'
                />
                <PrimaryInput
                  width='50%'
                  placeHolder='YY'
                  className='text-center pl-0'
                />
              </div>
            </div>
            <div className='flex flex-col items-center  justify-end  '>
              <PrimaryInput placeHolder='Promo Code' />
            </div>
          </div>
          <PrimaryInput
            placeHolder='CVV'
            borderBottom={true}
            className=' pl-0 rounded-none'
            width={'30%'}
          />
          <CheckBox text='I agree with terms and conditions' />
          <hr className='sm:w-[60%] border-customGrayFive mb-4' />
        </div>
        <div className='flex flex-col '>
          <p className='text-customTextThree text-[16px]'>
            Total <span className='font-bold'>$0000,00</span>
          </p>
          <PrimaryButton
            text='Purchase'
            className='rounded-3xl bg-customTextEight mt-2'
          />
        </div>
      </div>
    </>
  );
}
