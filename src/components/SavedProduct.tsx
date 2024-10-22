import PrimaryButton from './Button/button';
interface ISavedProducts {
  confirm?: boolean;
  setConfirm?: (value: boolean) => void;
  name: string;
  priceOrTime: string;
  isNotification: boolean;
}

export default function SavedProduct({
  name,
  priceOrTime,
  isNotification,
}: ISavedProducts) {
  return (
    <div className='w-max h-max  font-lato  flex items-center gap-8'>
      <div className=' h-full flex items-center  gap-2 '>
        <div className='w-[69px] h-[76px] bg-customGrayFour'></div>
        <div className='w-full sm:w-[250px] flex flex-col items-start'>
          <p className='text-[14px]'>{name}</p>
          <p className='text-[12px] text-customTextThree font-light'>
            {priceOrTime}
          </p>
        </div>
      </div>
      {isNotification && (
        <div className='  flex items-center justify-center gap-2'>
          <p className='text-[12px]  text-customTextThree hidden sm:block'>
            Saved
          </p>
          <svg
            width={14}
            height={12}
            fill='#6154A4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' />
          </svg>
          <PrimaryButton
            className=' bg-customPurple rounded-3xl w-max font-normal h-[28px] pl-2 pr-2 text-center  shadow-md'
            text='Add to Cart'
          />
        </div>
      )}
    </div>
  );
}
