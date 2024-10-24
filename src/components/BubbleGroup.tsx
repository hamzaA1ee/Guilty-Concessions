//next impots
import Image from 'next/image';

//assets imports
import bubbleTwo from '@/../public/assets/images/Oval Copy 3.png';
import bubbleOne from '@/../public/assets/images/Oval Copy 2.png';
import oval from '@/../public/assets/images/Oval.png';
import bottomOval from '@/../../public/assets/images/Oval Copy.png';
import ovalOne from '@/../../public/assets/images/Img.png';
export default function BubbleGroup() {
  return (
    <>
      {' '}
      <div className='w-[320px] h-[300px] absolute top-0 right-0 sm:top-28 sm:hidden '>
        <Image
          src={ovalOne}
          alt='bubble'
          width={1600}
          height={900}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className='absolute bottom-30  sm:left-16 left-8 '>
        <Image
          src={bubbleTwo}
          width={53}
          height={51}
          alt='bubble'
        ></Image>
      </div>
      <div className='absolute bottom-3 sm:left-5 left-0  '>
        <Image
          src={bubbleOne}
          width={100}
          height={98}
          alt='bubble'
        ></Image>
      </div>
      <div className='absolute top-24 left-0 hidden sm:block'>
        <Image
          src={oval}
          width={100}
          height={97}
          alt='bubble'
        ></Image>
      </div>
      <div className='absolute  bottom-0 right-0 hidden sm:block  '>
        <Image
          src={bottomOval}
          width={268}
          height={259}
          alt='bubble'
        ></Image>
      </div>
    </>
  );
}
