import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import PrimaryInput from './Input/PrimaryInput';
import PrimaryButton from './Button/button';
export default function AddCard() {
  return (
    <DialogContent className='sm:max-w-[472px] bg-white'>
      <DialogHeader>
        <DialogTitle className=' text-[24px] text-customPurple  font-bold gap-2 flex flex-col items-start'>
          Add Card
        </DialogTitle>
      </DialogHeader>
      <div className='flex flex-col gap-4 space-y-3  mt-4 w-full '>
        <PrimaryInput placeHolder='Name on card' />
        <PrimaryInput placeHolder='Card Number' />
        <div className='flex md:gap-8 md:flex-nowrap flex-wrap gap-2'>
          <PrimaryInput placeHolder='Expiry Date' />
          <PrimaryInput placeHolder='CVV' />
        </div>
        <PrimaryButton
          text='Add Card'
          className='rounded-3xl bg-customPurple'
        />
      </div>
    </DialogContent>
  );
}
