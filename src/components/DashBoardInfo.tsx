//custom ui imports
import AddToCart from './AddToCart';
import PrimaryButton from './Button/button';
import HeaderText from './HeaderText';

export default function DashboardInfo() {
  return (
    <>
      {/* for the large view */}
      <div className='h-[25%] w-full md:flex items-center justify-between  hidden '>
        <div>
          <HeaderText
            headerText='Stacy Mathew'
            paraText='Your Share Link:'
            linkSrc='guiltyconsessions.com/stacymathew'
          />
        </div>
        <div className='flex flex-col gap-4 h-full  justify-center '>
          <p className='text-[19px] text-customGray font-semibold'>
            Account Banalnce:{' '}
          </p>
          <div className='flex items-center gap-2'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-[19px] text-customGray font-semibold'>
                $ 0.00000{' '}
              </p>
              <PrimaryButton
                text='Add Funds'
                className='w-[30%] h-[6.5%] min-w-[127px] min-h-[36px] text-[12px] font-bold  rounded-3xl border-2  border-customGrayTwo'
                fontColor='customTextTwo'
              />
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <AddToCart />
              <PrimaryButton
                text='Checkout'
                className='w-[30%] h-[6.5%] min-w-[127px] min-h-[36px] text-[12px] font-bold text-black rounded-3xl border-2  border-customGrayTwo'
                fontColor='customTextTwo'
              />
            </div>
          </div>
        </div>
        <div>
          <HeaderText
            headerText='Indulge'
            headerClass='text-[64px]'
          />
        </div>
      </div>
      {/* for below medium and large screens */}
      <div className='w-full h-auto flex flex-col items-start gap-1 md:hidden '>
        <HeaderText
          headerText='Stacy Mathew'
          headerClass='text-[24px]'
        />
        <div className='w-full flex items-center justify-between'>
          <p className='text-[12px] text-customGray font-semibold'>
            Your Share Link:{' '}
          </p>
          <p className='text-[12px] text-customGray font-semibold'>
            Account Banalnce:{' '}
          </p>
        </div>
        <div className='w-full flex items-center justify-between'>
          <p className='text-[12px] text-customGray font-semibold'>
            guiltyconsessions.com/stacymathew
          </p>
          <p className='text-[12px] text-customGray font-semibold'>
            $0.0000000{' '}
          </p>
        </div>
        <div className='flex items-center justify-center gap-2 my-2'>
          <PrimaryButton
            text='Add Funds'
            fontColor='customTextTwo'
            className='w-[30%] h-[6.5%] min-w-[127px] min-h-[36px] text-[12px] font-bold  rounded-3xl border-2  border-customGrayTwo'
          />
          <PrimaryButton
            text='Checkout'
            fontColor='customTextTwo'
            className='w-[30%] h-[6.5%] min-w-[127px] min-h-[36px] text-[12px] font-bold   rounded-3xl border-2  border-customGrayTwo'
          />
          <AddToCart />
        </div>
        <HeaderText
          headerText='Indulge'
          headerClass='text-[32px]'
        />
      </div>
    </>
  );
}
