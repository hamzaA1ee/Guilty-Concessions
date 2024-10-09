//next imports
import Image from 'next/image';

// image imports
import stepOneImg from '../../../../../public/assets/images/stepOneImg.png';
import ovalOne from '../../../../../public/assets/images/Img.png';
import bitmap from '../../../../../public/assets/images/Bitmap.png';
import bitmapTwo from '../../../../../public/assets/images/bitmapTwo.png';
export default function MaskGroupView({ step }: { step: number }) {
  return (
    <>
      {/* step ke hisab sa ya change hoga */}

      {/* //for step1 starts */}
      {step <= 1 ? (
        <div className='w-full h-auto  flex items-center  mt-28.5  '>
          <Image
            src={stepOneImg}
            width={600}
            height={50}
            alt='mask-group'
            className='relative mr-8 overflow-y-hidden'
          ></Image>

          {/* <Image
            src={ovalOne}
            width={444}
            height={426}
            alt='mask-group'
            className='absolute top-28     right-0'
          ></Image> */}
        </div>
      ) : (
        <div className='w-full h-auto  flex items-center  relative top-0 left-0  '>
          <Image
            src={step == 2 ? bitmap : bitmapTwo}
            width={550}
            height={450}
            alt='mask-group'
            className=''
          ></Image>
        </div>
      )}
      {/* for step 2 ends */}
    </>
  );
}
