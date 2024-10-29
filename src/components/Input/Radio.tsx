'use client';
import { Trans } from 'react-i18next';

import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface IRadio {
  text: string[];
  className?: string;
}

export function Radio({ text, className }: IRadio) {
  return (
    <RadioGroup className={`${className} flex gap-4`}>
      <div className='flex items-center space-x-4'>
        {text.map((val, index) => (
          <div
            key={index}
            className='flex items-center gap-2'
          >
            {' '}
            {/* Use a unique key for the Fragment */}
            <RadioGroupItem
              className='text-customPurple'
              value={val}
              id={val}
            />
            <label
              htmlFor={val}
              className='text-[12px] text-customTextThree leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              <Trans i18nKey={val}>{val}</Trans>
            </label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
}
