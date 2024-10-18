'use client';
import PrimaryButton from '@/components/Button/button';
import CheckoutSummary from '@/components/CheckoutSummary';
import CheckoutProduct from '@/components/Product/CheckoutProduct';
import ConfirmCheckoutView from './Confirm';
import PaymentView from './Payment';
import { useState } from 'react';

export default function CheckoutView() {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div className='w-full h-[50px] bg-customPink p-4 flex items-center'>
        <p className='font-bold text-[15px] ml-[3%]'>Shopping Cart</p>
      </div>

      {/* below comes all the products */}
      <div className='w-full  lg:w-[85%] h-auto flex lg:flex-row flex-col items-center justify-center gap-4 lg:gap-0 '>
        {' '}
        <div className='h-full w-full   lg:max-h-[500px] gap-8 flex flex-wrap md:flex-row flex-col items-center md:justify-center   lg:overflow-y-auto '>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <CheckoutProduct key={index} />
            ))}
        </div>
        <hr className='sm:hidden block w-full h-auto mt-4 mb-4  border-customGray' />
        <div
          className={`${confirm ? 'lg:pl-4 sm:w-4/5 md:w-[85%]  lg:flex-row' : 'sm:w-[50%]'} h-full w-full flex flex-col sm:items-center sm:justify-center items-end sm:gap-4 gap-6`}
        >
          {confirm ? <PaymentView /> : <ConfirmCheckoutView />}
        </div>{' '}
      </div>
    </>
  );
}
