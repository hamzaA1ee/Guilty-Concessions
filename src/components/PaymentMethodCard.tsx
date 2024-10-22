import PrimaryButton from './Button/button';

export default function PaymentMethodCard() {
  return (
    <div className='w-full h-[76px] shadow-md rounded-md flex'>
      <div className='w-full  flex flex-col items-start pl-4 gap-2 justify-center'>
        <p className='font-inter text-[12px] text-customGray'>
          CITIBANK (Stacy Checking)
        </p>
        <p className='font-bold font-inter text-[14px] text-customBrown '>
          Checking ****1234
        </p>
      </div>
      <div className='w-full pr-4 flex gap-2 items-center'>
        <PrimaryButton
          text='Edit'
          className='text-[14px]  border-2 border-customGrayTwo    rounded-3xl'
          fontColor='customTextTwo'
          width='50%'
        />
        <PrimaryButton
          text='Delete'
          className='text-[14px]  border-2 border-customGrayTwo    rounded-3xl'
          fontColor='customTextTwo'
          width='70%'
        />
      </div>
    </div>
  );
}
