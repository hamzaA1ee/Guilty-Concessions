interface IButton {
  className?: string;
  handleClick?: () => void;
  text: string;
  fontColor?:string;
}
export default function PrimaryButton({
  className,
  handleClick,
  text,
  fontColor
}: IButton) {
  return (
    <button
      onClick={handleClick || undefined}
      className={`${className} text-center text-${fontColor? fontColor:'customWhite'} font-bold text-[14px] w-full h-[38px]`}
    >
      {text}
    </button>
  );
}
