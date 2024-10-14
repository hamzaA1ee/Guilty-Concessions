interface IButton {
  className?: string;
  handleClick?: () => void;
  text: string;
}
export default function PrimaryButton({
  className,
  handleClick,
  text,
}: IButton) {
  return (
    <button
      onClick={handleClick || undefined}
      className={`${className} text-center text-customWhite font-bold text-[14px] w-full h-[38px]`}
    >
      {text}
    </button>
  );
}
