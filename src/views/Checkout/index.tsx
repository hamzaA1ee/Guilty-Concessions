//views imports
import ConfirmAndPaymentView from './ConfirmAndPayment';
import SuccessMessageView from './SuccessMessage';

export default function CheckoutView() {
  return (
    <>
      <div className='w-full h-[50px] font-lato bg-customPink p-4 flex items-center'>
        <p className='font-bold text-[15px] ml-[3%]'>Shopping Cart</p>
      </div>
      {true ? <ConfirmAndPaymentView /> : <SuccessMessageView />}
    </>
  );
}
