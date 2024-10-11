import LoginMaskGroup from '@/views/Authentication/Login/MaskGroup';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-hidden  '>
        <div className='flex items-start gap-64 h-full  mt-[150px] w-full'>
          <div className={`w-[491px] ml-36 h-3/4  mt-10 `}>
            {/* <SignInFormView /> */}
            {children}
          </div>
          <div className='h-full '>
            <LoginMaskGroup />
          </div>
        </div>

        {/* //below the fixed shapes of oval that are used in desgin */}
      </div>
    </>
  );
}
