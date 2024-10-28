//custom components imports
import OrderHistoryCard from '@/components/OrderHistoryCard';
import { OrderHistoryModal } from '@/components/OrderHistoryModal';
//shadcn imports
import { Dialog } from '@/components/ui/dialog';

export default function OrderHistoryView() {
  return (
    <Dialog>
      <div className='flex flex-col gap-5 h-[400px] overflow-y-auto custom-scrollbar'>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <OrderHistoryCard key={index} />
          ))}
      </div>
      <OrderHistoryModal isPurchase={false} />
    </Dialog>
  );
}
