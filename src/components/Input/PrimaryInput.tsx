interface IPrimary {
  placeHolder?: string;
  className?: string;
  type: string;
}

export default function PrimaryInput({
  placeHolder,
  className,
  type,
}: IPrimary) {
  return (
    <input
      placeholder={placeHolder}
      type={type || 'text'}
      className={`${className} w-full h-[38px]  pl-4 border-2 border-customGrayTwo  rounded-3xl text-customText font-medium text-[14px]`}
    />
  );
}
