//next imports
import Image from 'next/image';
import PrimaryButton from '../Button/button';
import TextAndLogo from '../TextAndLogo';

//react imports

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

          <TextAndLogo
            text='delete'
            isDelete={true}
          />
        </div>
        <div className='flex items-center w-full h-full justify-between '>
          <div className='w-[100px]  h-[32px] rounded-2xl border-2 border-customPurpleTwo flex items-center justify-between'>
            <button className='text-[16px] w-[27px]  bg-customGrayThree text-customTextThree  h-full rounded-l-full'>
              -
            </button>
            <p className='text-[12px]'>1</p>
            <button className='text-[16px] w-[27px]  bg-customGrayThree text-customTextThree  h-full rounded-r-full'>
              +
            </button>
          </div>
          <TextAndLogo
            text='save'
            isSave={true}
          />
        </div>
      </div>
    </div>
  );
}
