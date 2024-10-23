'use client';

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function OrderHistoryModal() {
  return (
    <>
      <DialogContent className='sm:max-w-md bg-white'>
        <DialogHeader>
          <DialogTitle className=' text-[24px]  font-bold gap-2 flex flex-col items-start'>
            <span className='text-customPurple'>Total Payment</span>
            <span>$157.03</span>
          </DialogTitle>
        </DialogHeader>
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className='flex flex-col  space-y-3  mt-4 w-full '
            >
              <p className='text-[16px] font-semibold '>
                {index > 0 ? 'Receiver Details' : 'Sender Details'}
              </p>
              <div className='flex justify-between font-medium text-[14px] border-2 border-customGrayTwo rounded-xl p-2 text-customTextTwo w-full '>
                <div className='flex flex-col  items-start gap-4'>
                  <p>Name</p>
                  <p>Account</p>
                </div>
                <div className='flex flex-col items-end gap-4'>
                  <p>John Doe</p>
                  <p>86063057</p>
                </div>
              </div>
            </div>
          ))}
      </DialogContent>
    </>
  );
}
