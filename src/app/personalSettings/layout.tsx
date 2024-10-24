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

      <div className='flex items-center border-2 border-black  justify-center h-full  sm:min-h-[500px]   w-full overflow-x-hidden '>
        <div className='flex flex-col items-start gap-4  h-[80%]     md:w-4/5 w-[90%]'>
          <div className='flex flex-col items-start'>
            <HeaderText
              headerText='Account Settings'
              paraText='Manage your profile, password and more.'
            />
          </div>
          <div className='w-full  flex mt-[2%] lg:gap-8'>{children}</div>
        </div>
      </div>
      <BubbleGroup />
    </>
  );
}
