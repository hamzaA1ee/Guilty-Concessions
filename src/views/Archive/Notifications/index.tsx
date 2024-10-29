'use client';
import HeaderText from '@/components/HeaderText';
//custom components imports
import SavedProduct from '@/components/SavedProduct';
import { useState } from 'react';

export default function NotificationsView() {
  const [confirm, useConfirm] = useState<boolean>(false);
  console.log(confirm);

  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='sm:w-[80%] w-[95%]  h-[80%]  flex flex-col items-center '>
        <div className='w-full pl-4 '>
          <HeaderText headerText='Notifications' />
        </div>
        <div className=' w-full gap-2 pl-4 grid lg:grid-cols-2 h-max z-10 '>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <SavedProduct
                key={index}
                name='You have successfully transfered funds'
                priceOrTime='Aug 1, 02:46 PM'
                isNotification={false}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
