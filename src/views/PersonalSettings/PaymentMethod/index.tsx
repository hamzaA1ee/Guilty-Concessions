import AddCard from '@/components/AddCard';
import PrimaryButton from '@/components/Button/button';
import PaymentMethodCard from '@/components/PaymentMethodCard';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';

export default function PaymentMethodView() {
  return (
    <>
      <div className='flex flex-col gap-4 h-[300px] overflow-y-auto custom-scrollbar'>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <PaymentMethodCard
              index={index}
              key={index}
            />
          ))}
      </div>
      <Dialog>
        <DialogTrigger className='w-full'>
          <PrimaryButton
            className='rounded-3xl mt-12 bg-customPurple'
            text='Link a Card or Bank'
          />
        </DialogTrigger>
        <AddCard />
      </Dialog>
    </>
  );
}
