//custom components imports
import SavedProduct from '@/components/SavedProduct';

export default function SavedView() {
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='sm:w-[80%] w-[95%]  h-[80%]  flex flex-col items-center'>
        <div className='w-full pl-4 '>
          <h1 className='font-bold text-[32px] sm:text-[34px] text-customBrown'>
            Saved
          </h1>
        </div>
        <div className=' w-full gap-2 pl-4 grid lg:grid-cols-2 h-max z-10 '>
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <SavedProduct
                key={index}
                name='Product Name'
                priceOrTime='$2500,00'
                isNotification={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
}