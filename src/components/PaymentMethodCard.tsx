import PrimaryButton from './Button/button';

interface IPaymentMethodCard {
  index: number;
}
export default function PaymentMethodCard({ index }: IPaymentMethodCard) {
  return (
    <div
      className={`w-full p-4 shadow-md z-50 rounded-md flex ${index > 0 && 'shadow-none  border-2 border-[#E7EBEF]'}`}
    >
      <div className='w-full  flex flex-col items-start pl-4 gap-2 justify-center'>
        <p
          className={`font-inter text-[12px]  ${index > 0 ? ' text-customGray' : 'text-customTextSeven'}`}
        >
          CITIBANK (Stacy Checking)
        </p>
        <p
          className={`font-bold font-inter text-[14px]  ${index > 0 ? 'text-customTextSeven' : 'text-customBrown'} `}
        >
          Checking ****1234
        </p>
      </div>
      <div className='w-full pr-4 flex gap-2 items-center '>
        <PrimaryButton
          text='Edit'
          className='text-[14px]  border-2 border-customGrayTwo  font-light  rounded-3xl'
          fontColor='customTextTwo'
          width='50%'
        />
        <PrimaryButton
          text='Delete'
          className='text-[14px]  border-2 border-customGrayTwo  font-light  rounded-3xl'
          fontColor='customTextTwo'
          width='70%'
        />
      </div>
    </div>
  );
}
