'use client';

import { Checkbox } from '@/components/ui/checkbox';

interface ICheckBox {
  text: string;
}
export function CheckBox({ text }: ICheckBox) {
  return (
    <div className='flex items-center  space-x-2'>
      <Checkbox id={text} />
      <label
        htmlFor={text}
        className='text-[12px] text-customTextThree  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        {text}
      </label>
    </div>
  );
}
