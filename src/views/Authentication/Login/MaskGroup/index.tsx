

//next imports
import Image from 'next/image';

//import assets
import maskGroupThree from '@/../public/assets/images/maskGroupThree.png';

export default function LoginMaskGroup() {
  return (
    <div className='w-full mr-20 h-full '>
      <Image
        src={maskGroupThree}
        height={1600}
        width={900}
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        alt='mask-group'
        className='relative mr-8 overflow-y-hidden z-10'
      ></Image>
    </div>
  );
}
