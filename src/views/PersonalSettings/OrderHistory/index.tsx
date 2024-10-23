import OrderHistoryCard from '@/components/OrderHistoryCard';
import { OrderHistoryModal } from '@/components/OrderHistoryModal';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Fragment } from 'react';

export default function OrderHistoryView() {
  return (
    <Dialog>
      {/* <DialogTrigger asChild>
        <Button variant='outline'>Share</Button>
      </DialogTrigger> */}
      <div className='flex flex-col gap-5 h-[400px] overflow-y-auto custom-scrollbar'>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <OrderHistoryCard key={index} />
          ))}
      </div>

      <OrderHistoryModal />
    </Dialog>
  );
}
