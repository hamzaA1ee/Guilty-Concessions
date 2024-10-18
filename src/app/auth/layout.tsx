  import NavBarComponent from '@/components/NavBar';

  //next Imports
  import Image from 'next/image';

  //images imports
  import bubbleOne from '../../../public/assets/images/Oval Copy 2.png';
  import bubbleTwo from '../../../public/assets/images/Oval Copy 3.png';
  import ovalOne from '../../../public/assets/images/Img.png';
  import bottomOval from '../../../public/assets/images/Oval Copy.png';
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <NavBarComponent />
        {children}
        {/* <div className='w-[320px] h-[300px] absolute top-0 right-0 sm:top-28 sm:w-[350px] sm:h-[320px] '>
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
        <div className='absolute bottom-3 sm:left-5 left-0 '>
          <Image
            src={bubbleOne}
            width={100}
            height={98}
            alt='bubble'
          ></Image>
        </div>
        <div className='absolute sm:bottom-0  sm:right-0 '>
          <Image
            src={bottomOval}
            width={168}
            height={159}
            alt='bubble'
          ></Image>
        </div> */}
      </>
    );
  }
