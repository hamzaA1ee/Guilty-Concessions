'use client';
import { Trans } from 'react-i18next';

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
        <Trans i18nKey={text}>{text}</Trans>
      </label>
    </div>
  );
}
