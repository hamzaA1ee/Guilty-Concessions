import ProductCard from './Product/ProductCard';
interface IProductContainer {
  isMyCoupon: boolean;
}
export default function ProductContainer({ isMyCoupon }: IProductContainer) {
  return (
    <div
      className={`${isMyCoupon ? 'w-full  custom-scrollbar overflow-y-auto' : 'w-[90%]'} font-lato  text-[24px] flex flex-col gap-4 sm:items-start items-center  justify-center`}
    >
      {!isMyCoupon && <p className='text-customGray '> Featured Gift Cards </p>}
      <div className='flex items-center  sm:justify-start justify-center w-full gap-4  flex-wrap'>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
    </div>
  );
}
