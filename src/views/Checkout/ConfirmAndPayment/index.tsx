'use client';
//react imports
import { useState } from 'react';
//custom component imports
import CheckoutProduct from '@/components/Product/CheckoutProduct';
//views imports
import PaymentView from '../Payment';
import ConfirmCheckoutView from '../Confirm';

export default function ConfirmAndPaymentView() {
  const [confirm] = useState(false);
  return (
    <div className='w-full  lg:w-[85%] h-auto flex lg:flex-row flex-col items-center justify-center gap-4 lg:gap-0 '>
      {' '}
      {/* below comes all the products */}
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
  );
}
