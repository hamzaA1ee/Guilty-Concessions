//custom component imports
import BubbleGroup from '@/components/BubbleGroup';
import NavBarComponent from '@/components/NavBar';
export default function FundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBarComponent />
      <div className='flex items-center  justify-center h-full w-full  overflow-x-hidden sm:overflow-y-hidden overflow-y-auto'>
        {/* <div className='flex sm:flex-row flex-col  items-start sm:gap-5 md:gap-0 mt-2 h-[80%] border-2 border-black  lg:w-4/5 w-[90%]'> */}
        {children}
        {/* </div> */}
      </div>
      <BubbleGroup isExternalFunds={true} />
    </>
  );
}
