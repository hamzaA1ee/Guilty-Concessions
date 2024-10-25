'use client';

import { Fragment } from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface IRadio {
  text: string[];
}

export function Radio({ text }: IRadio) {
  return (
    <RadioGroup className='flex gap-4'>
      <div className='flex items-center space-x-4'>
        {text.map((val, index) => (
          <div key={index} className='flex items-center gap-2'> {/* Use a unique key for the Fragment */}
            <RadioGroupItem
              className='text-customPurple'
              value={val}
              id={val}
            />
            <label
              htmlFor={val}
              className='text-[12px] text-customTextThree leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {val}
            </label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
}
