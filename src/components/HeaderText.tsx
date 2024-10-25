//props interface
interface IHeader {
  headerText: string;
  paraText?: string;
  headerClass?: string;
  linkSrc?: string;
  textSize?: string;
}

export default function HeaderText({
  headerText,
  paraText,
  headerClass,
  linkSrc,
  textSize,
}: IHeader) {
  return (
    <>
      <h1
        className={` font-bold ${headerClass} ${textSize ? `${textSize}` : 'text-[28px]'}`}
      >
        {' '}
        {headerText}
      </h1>

      {paraText && (
        <p className='font-medium text-[14px] text-customGray  '>{paraText}</p>
      )}
      {linkSrc && (
        <a
          target='_blank'
          href={linkSrc}
          className='font-medium text-[14px] text-customGray  '
        >
          {linkSrc}
        </a>
      )}
    </>
  );
}
