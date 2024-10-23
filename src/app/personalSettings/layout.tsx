import BubbleGroup from '@/components/BubbleGroup';
import HeaderText from '@/components/HeaderText';
import NavBarComponent from '@/components/NavBar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBarComponent />
      <div className='flex items-center  justify-center w-full h-screen overflow-x-hidden overflow-y-hidden  '>
        <div className='flex flex-col items-start gap-4 sm:h-[90%]  h-full   sm:mt-[120px] mt-72  md:w-4/5 w-[90%]'>
          <div className='flex flex-col items-start'>
            <HeaderText
              headerText='Account Settings'
              paraText='Manage your profile, password and more.'
            />
          </div>
          <div className='w-full h-full flex mt-[2%] lg:gap-8'>{children}</div>
        </div>
      </div>
      <BubbleGroup />
    </>
  );
}
