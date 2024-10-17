interface ICheckoutSummary {
  text: string;
  price: string;
  isTotal?: boolean;
}
export default function CheckoutSummary({
  text,
  price,
  isTotal = false,
}: ICheckoutSummary) {
  return (
    <div className='flex items-center justify-between gap-2'>
      <p className={` ${isTotal ? 'text-[16px] ' : 'text-[12px] text-customTextThree'}`}>{text}</p>
      <p
        className={` ${isTotal ? 'text-[16px] font-bold' : 'text-[14px] text-customTextThree'}`}
      >{`$${price}`}</p>
    </div>
  );
}
