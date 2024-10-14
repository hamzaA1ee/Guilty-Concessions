import LoginMaskGroup from '@/views/Authentication/Login/MaskGroup';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex items-center sm:justify-center justify-start w-full h-screen overflow-x-hidden overflow-y-hidden  '>
        <div className='flex items-start  gap-4 h-full sm:mt-[150px] mt-72     lg:w-11/12 md:w-3/5  w-full'>
          {' '}
          {/**lg:ml-32 was being used for adjusting the image to the end */}
          <div className={`w-full h-3/4 flex justify-center  `}>
            <div className='w-4/5  '>
              {/* <SignInFormView /> */}
              {children}
            </div>
          </div>
          <div className={`h-full w-full lg:block hidden  `}>
            <LoginMaskGroup />
          </div>
        </div>

        {/* //below the fixed shapes of oval that are used in desgin */}
      </div>
    </>
  );
}
