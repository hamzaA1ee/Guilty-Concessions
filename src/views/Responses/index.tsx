//next imports
import PrimaryButton from '@/components/Button/button';
import Image, { StaticImageData } from 'next/image';

interface IResponse {
  logo: StaticImageData;
  headerText: string;
  paraText: string;
  buttonText?: string;
}
export default function ResponseViews({
  logo,
  headerText,
  paraText,
  buttonText,
}: IResponse) {
  return (
    <div className='w-full h-full  flex items-center justify-center'>
      <div className='w-[66%] h-[71%]  flex flex-col gap-4 items-center justify-start'>
        <div className='w-full  h-[70%] flex items-center justify-center'>
          <Image
            alt='link expired'
            src={logo}
            width={405}
            height={387}
          />
        </div>
        <div className='flex flex-col items-center w-[80%] h-full gap-4 justify-center'>
          <h1 className='text-customTextTwo text-[32px] font-bold text-center'>
            {headerText}
          </h1>
          <p className='text-customGray text-[14px] text-center '>{paraText}</p>
          {buttonText && (
            <PrimaryButton
              text={buttonText}
              width='80%'
              className='rounded-3xl bg-customPurple'
            />
          )}
        </div>
      </div>
    </div>
  );
}
