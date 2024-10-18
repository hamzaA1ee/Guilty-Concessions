//custom components imports
import PrimaryButton from '@/components/Button/button';
import CheckoutSummary from '@/components/CheckoutSummary';

export default function ConfirmCheckoutView() {
  return (
    <>
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
    </>
  );
}
