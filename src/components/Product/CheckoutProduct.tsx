//next imports
import Image from 'next/image';
import PrimaryButton from '../Button/button';
export default function CheckoutProduct() {
  return (
    <div className='w-[344px] h-[89px]   flex  items-center justify-between  '>
      <div className='w-[30%] bg-customGrayFour  h-full'>
        {/* <Image
          src={'#'}
          alt=''
          height={900}
          className='object-cover'
          width={1600}
        /> */}
      </div>
      <div className='w-[65%] h-full  flex flex-col items-center justify-between  '>
        <div className='w-full flex items-center justify-between '>
          <div className='flex flex-col items-start'>
            <p className='text-[14px]'>Product Name</p>
            <p className='text-[12px]'>$2500,00</p>
          </div>
          <div className='flex items-center'>
            <button className='flex items-center'>
              <span className='text-[12px]'>delete</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={15}
                height={13}
                fill='#4A4A4A'
                viewBox='0 0 448 512'
              >
                <path d='M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z' />
              </svg>
            </button>
          </div>
        </div>
        <div className='flex items-center w-full h-full justify-between '>
          <div className='w-[100px]  h-[32px] rounded-2xl border-2 border-customPurpleTwo flex items-center justify-between'>
            <PrimaryButton
              className='text-[16px] font-bold text-customTextThree bg-customGrayThree w-[23%] h-[28px] rounded-l-full'
              text='-'
            />
            <p className='text-[12px]'>1</p>
            <PrimaryButton
              className='text-[16px] font-bold text-customTextThree bg-customGrayThree w-[23%] h-[28px] rounded-r-full'
              text='+'
            />
          </div>
          <button className='flex items-center'>
            <span className='text-[12px]'>save </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={15}
              height={20}
              viewBox='0 0 512 512'
            >
              <path d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
