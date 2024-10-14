interface IHeader {
  headerText: string;
  paraText?: string;
}

export default function HeaderText({ headerText, paraText }: IHeader) {
  return (
    <>
      <h1 className='text-[28px] font-bold'> {headerText}</h1>
      <p className='font-medium text-[14px] text-customGray  '>{paraText}</p>
    </>
  );
}
