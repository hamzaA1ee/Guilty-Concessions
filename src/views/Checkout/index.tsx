import PrimaryButton from '@/components/Button/button';
import CheckoutSummary from '@/components/CheckoutSummary';
import CheckoutProduct from '@/components/Product/CheckoutProduct';

export default function CheckoutView() {
  return (
    <>
      <div className='w-full h-[50px] bg-customPink flex items-center'>
        <p className='font-bold text-[15px]'>Shopping Cart</p>
      </div>

      {/* below comes all the products */}
      <div className=' w-[85%] h-full flex lg:flex-row flex-col items-center justify-center '>
        {' '}
        
        <div className='xl:w-full lg:w-[60%]  w-full gap-8 grid xl:grid-cols-2 grid-cols-1  place-items-center overflow-y-auto  '>
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
        <hr className='sm:hidden block w-full h-auto mt-4 mb-4  border-customGray' />
        <div className='sm:w-[50%] w-full xl:w-[40%] h-full  flex flex-col sm:items-center sm:justify-center items-end sm:gap-4 gap-6'>
          <CheckoutSummary
            text='Cart Total'
            price='1009'
          />
          <CheckoutSummary
            text='Account Balance'
            price='2,000.00'
          />
          <CheckoutSummary
            text='Total'
            price='1009,99'
            isTotal={true}
          />

          <div className='sm:w-[80%] w-full'>
            <PrimaryButton
              className='rounded-3xl bg-customPurple'
              text='Proceed to Checkout'
            />
          </div>
        </div>{' '}
        {/**this div will contain    */}
      </div>
    </>
  );
}
