import PrimaryInput from '@/components/Input/PrimaryInput';
import ProductCard from '@/components/Product/ProductCard';
import ProductContainer from '@/components/ProductContainer';

export default function DashboardView() {
  return (
    <>
      <div className='w-[90%] font-lato mt-[3%]'>
        <PrimaryInput
          placeHolder='Search from over 200 retailers'
          className='rounded-none text-[20px] h-[48px]'
        />
      </div>

      <ProductContainer isMyCoupon={false}/>
    </>
  );
}
