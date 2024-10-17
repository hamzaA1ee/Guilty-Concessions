//next imports
import Image from 'next/image';

//assets imports
import ps from '@/../public/assets/images/ps.jpg';
import AddToCart from '../AddToCart';

export default function ProductCard() {
  return (
    <div className='w-[200px] h-[250px] gap-2   rounded border-2 flex flex-col items-center justify-center bg-white  border-customGrayTwo '>
      <div className='border-2 border-customGrayTwo w-[90%] h-[180px] relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#D46363'
          width={20}
          height={20}
          className='absolute top-2 right-2'
          viewBox='0 0 512 512'
        >
          <path d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z' />
        </svg>
        <Image
          src={ps}
          alt='product-image'
          className='w-full h-full object-contain'
          width={1600}
          height={900}
        />
      </div>
      <div className='flex flex-col items-start w-[90%]'>
        <p className='text-[16px] font-semibold'>Buffalo wild wings</p>
        <div className='flex items-center justify-between w-full'>
          <p className='text-[15px] text-customGray '>$10-$100</p>
          <AddToCart />
        </div>
      </div>
    </div>
  );
}