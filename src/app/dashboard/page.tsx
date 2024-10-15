import HeaderText from '@/components/HeaderText';
import PrimaryInput from '@/components/Input/PrimaryInput';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className='w-full h-full flex items-end  justify-center '>
      <div className='w-[90%] h-[85%] gap-2 flex flex-col items-center '>
        <div className='h-[25%] w-full flex items-center justify-between '>
          <div>
            <HeaderText
              headerText='Stacy Mathew'
              paraText='Your Share Link:'
            />
          </div>
          <div className='flex flex-col gap-4 h-full  justify-center '>
            <p className='text-[19px] text-customGray font-semibold'>
              Account Banalnce:{' '}
            </p>
            <div className='flex items-center gap-2'>
              <div className='flex flex-col items-center gap-1'>
                <p className='text-[19px] text-customGray font-semibold'>
                  $ 0.00000{' '}
                </p>
                <Button className='w-[30%] h-[6.5%] min-w-[127px] min-h-[36px] text-[12px] font-bold text-customTextTwo rounded-3xl border-2  border-customGrayTwo'>
                  Add Funds
                </Button>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                  width={28}
                  height={26}
                >
                  <path
                    d='M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z'
                    transform='scale(-1, 1) translate(-576, 0)'
                  />
                </svg>

                <Button className='w-[30%] h-[6.5%] min-w-[127px] min-h-[36px] text-[12px] font-bold text-customTextTwo rounded-3xl border-2  border-customGrayTwo'>
                  Checkout
                </Button>
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
        <div className='h-full w-full bg-[#F9F9F9]  z-10 flex flex-col gap-8 items-center'>
          <div className='w-[90%] mt-[3%]'>
            <PrimaryInput
              placeHolder='Search from over 200 retailers'
              className='rounded-none text-[20px] h-[48px] '
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
