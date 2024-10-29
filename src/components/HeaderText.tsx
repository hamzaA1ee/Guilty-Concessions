'use client';
//i18n imports
import { Trans } from 'react-i18next';

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
        <Trans i18nKey={headerText}>{headerText}</Trans>
      </h1>

      {paraText && (
        <p className='font-medium text-[14px] text-customGray  '>
          <Trans i18nKey={paraText}>{paraText}</Trans>
        </p>
      )}
      {linkSrc && (
        <a
          target='_blank'
          href={linkSrc}
          className='font-medium text-[14px] text-customGray  '
        >
          <Trans i18nKey={linkSrc}>{linkSrc}</Trans>
        </a>
      )}
    </>
  );
}
