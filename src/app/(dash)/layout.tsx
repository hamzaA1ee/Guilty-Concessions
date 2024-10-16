//custom components imports
import DashboardInfo from '@/components/DashBoardInfo';

//next imports
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full h-full flex items-end  justify-center '>
      <div className='w-[90%] h-[85%] gap-2 flex flex-col items-center '>
        {/* //below is the dashboardInfo component */}
        <DashboardInfo />

        {/* below is the whole view where all the cards and search bar is placed below div */}
        <div className='h-full w-full z-10 sm:bg-[#F9F9F9] bg-white border-2 border-[#707070] sm:border-none overflow-y-auto  flex flex-col gap-8 items-center custom-scrollbar'>
          {children}
        </div>
      </div>
    </div>
  );
}
