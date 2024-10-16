interface IPrimary {
  placeHolder?: string;
  className?: string;
  isRadio?: boolean;
}

export default function PrimaryInput({
  placeHolder,
  className,
  isRadio,
}: IPrimary) {
  return (
    <input
      placeholder={placeHolder}
      type={(isRadio && 'radio') || 'text'}
      className={`${className} ${!isRadio ? 'w-full h-[38px]  pl-4 border-2 border-customGrayTwo  rounded-3xl text-customText font-medium text-[14px]' : 'w-4 h-4 text-customPurple cursor-pointer bg-gray-100 border-gray-300 focus:ring-customPurple dark:focus:ring-customPurple dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'}`}
    />
  );
}
