import PrimaryInput from '@/components/Input/PrimaryInput';
import ProductCard from '@/components/ProductCard';

export default function DashboardView() {
  return (
    <>
      <div className='w-[90%] mt-[3%]'>
        <PrimaryInput
          placeHolder='Search from over 200 retailers'
          className='rounded-none text-[20px] h-[48px]'
        />
      </div>

      <div className='w-[90%]  text-[24px] flex flex-col gap-4 sm:items-start items-center  justify-center'>
        <p className='text-customGray '> Featured Gift Cards </p>
        <div className='flex items-center sm:justify-start justify-center w-full gap-4  flex-wrap'>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </div>
      </div>
    </>
  );
}
