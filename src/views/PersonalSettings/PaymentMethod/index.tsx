import PaymentMethodCard from '@/components/PaymentMethodCard';

export default function PaymentMethodView() {
  return (
    <div className='flex flex-col gap-4 h-[400px] overflow-y-auto custom-scrollbar'>
       {Array(3)
            .fill(null)
            .map((_, index) => (
              <PaymentMethodCard index={index} key={index} />
            ))}
    </div>
  );
}
