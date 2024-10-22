import HeaderText from '@/components/HeaderText';
import OrderHistoryCard from '@/components/OrderHistoryCard';

export default function OrderHistory() {
  return (
    <>
      <HeaderText headerText='Order History' />
      <div className='flex flex-col gap-5'>
      <OrderHistoryCard />
      <OrderHistoryCard />

      <OrderHistoryCard />
      </div>
    </>
  );
}
