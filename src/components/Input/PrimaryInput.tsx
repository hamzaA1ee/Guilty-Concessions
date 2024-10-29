'use client';
import { useTranslation } from 'react-i18next';

interface IPrimary {
  placeHolder?: string;
  className?: string;
  isRadio?: boolean;
  borderBottom?: boolean;
  width?: string;
  paddingLeft?: number;
}

export default function PrimaryInput({
  placeHolder,
  className,
  isRadio,
  borderBottom = false,
  width,
  paddingLeft = -1,
}: IPrimary) {
  const { t } = useTranslation();
  return (
    <input
      placeholder={t(placeHolder || '')}
      type={(isRadio && 'radio') || 'text'}
      className={`${className} ${!isRadio ? `${width ? `w-[${width}]` : 'w-full'} h-[38px]  ${paddingLeft >= 0 ? `pl-${paddingLeft}` : 'pl-4'} ${borderBottom ? 'border-b-[1px] border-customTextThree' : 'border-2 border-customGrayTwo'}  rounded-3xl text-customText font-medium text-[14px]` : 'w-4 h-4 text-customPurple cursor-pointer bg-gray-100 border-gray-300 focus:ring-customPurple dark:focus:ring-customPurple dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'}`}
    />
  );
}
