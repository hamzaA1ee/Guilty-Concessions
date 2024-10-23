import { DialogTrigger } from './ui/dialog';

export default function OrderHistoryCard() {
  return (
    <DialogTrigger asChild>
      {/* <Button variant='outline'>Share</Button> */}
      <div className='w-full p-4 bg-white z-50 shadow-md rounded-md font-inter flex items-center justify-between'>
        <div className='flex flex-col items-start  pl-4'>
          <p>Added Funds</p>
          <p className='text-[14px] text-customTextSeven'>
            From Checking ****1234
          </p>
        </div>
        <p className='font-bold text-[14px] pr-4'>+$157.03</p>
      </div>
    </DialogTrigger>
  );
}
