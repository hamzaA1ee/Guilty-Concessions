'use client';
import { Trans } from 'react-i18next';

interface IButton {
  className?: string;
  handleClick?: () => void;
  text: string;
  fontColor?: string;
  width?: string;
}
export default function PrimaryButton({
  className,
  handleClick,
  text,
  fontColor,
  width,
}: IButton) {
  return (
    <button
      onClick={handleClick || undefined}
      className={`${className} text-center text-${fontColor ? fontColor : 'customWhite'} font-bold text-[14px] w-${width ? `[${width}]` : 'full'} h-[38px]`}
    >
      <Trans i18nKey={text}>{text}</Trans>
    </button>
  );
}
