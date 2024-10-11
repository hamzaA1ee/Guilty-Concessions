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
      <div className='absolute top-28 right-0'>
        <Image
          src={ovalOne}
          width={350}
          height={340}
          alt='mask-group'
        ></Image>
      </div>
      <div className='absolute bottom-30 left-16'>
        <Image
          src={bubbleTwo}
          width={53}
          height={51}
          alt='bubble'
        ></Image>
      </div>
      <div className='absolute bottom-3 left-5'>
        <Image
          src={bubbleOne}
          width={100}
          height={98}
          alt='bubble'
        ></Image>
      </div>
      <div className='absolute bottom-0 right-0'>
        <Image
          src={bottomOval}
          width={168}
          height={159}
          alt='bubble'
        ></Image>
      </div>
    </>
  );
}
