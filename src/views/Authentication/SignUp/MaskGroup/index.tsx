//next imports
import Image from 'next/image';

// image imports

import stepOneImg from '@/../public/assets/images/stepOneImg.png';

import bitmap from '@/../public/assets/images/Bitmap.png';
import bitmapTwo from '@/../../public/assets/images/bitmapTwo.png';
export default function MaskGroupView({ step }: { step: number }) {
  return (
    <div>
      {/* //for step1 starts */}
      <div className='h-full w-full'>
        {step <= 1 ? (
          <Image
            src={stepOneImg}
            height={1366}
            width={768}
            style={{ objectFit: 'contain' }}
            alt='mask-group'
            className='relative overflow-y-hidden z-10'
          ></Image>
        ) : (
          <Image
            src={step == 2 ? bitmap : bitmapTwo}
            width={550}
            height={450}
            alt='mask-group'
            
          ></Image>
        )}
      </div>
      {/* for step 2 ends */}
    </div>
  );
}
