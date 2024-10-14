//custom components imports
import PrimaryButton from '@/components/Button/button';
import { Fragment, useRef, useState } from 'react';

//views imports

//

//next imports
//logos imports

export default function VerifyEmailView() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [msg, setMsg] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.target.value.length === 1) {
      // Move to the next input
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus(); // Use optional chaining
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace') {
      if (index > 0 && e.currentTarget.value.length === 0) {
        inputRefs.current[index - 1]?.focus(); // Use optional chaining
      }
    }
  };

  return (
    <>
      <h1 className='text-[28px] font-bold'>Verification</h1>

      {msg == '' ? (
        <Fragment>
          <p className='font-medium text-[14px] text-customGray '>
            Enter 6 Digits code we have send you on your phone number
          </p>
          <div>
            <form
              action=''
              method='post'
            >
              <div className='flex flex-col space-y-16 mt-20 mb-20'>
                <div className='flex flex-row items-center justify-between mx-auto w-full'>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      className='w-[61px] h-[53px]'
                      key={index}
                    >
                      <input
                        ref={el => {
                          inputRefs.current[index] = el;
                        }}
                        className='rounded-3xl w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none  border border-customGrayTwo text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-customPurple'
                        type='text'
                        maxLength={1}
                        onChange={e => handleChange(e, index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>

          <PrimaryButton
            text='Verify'
            handleClick={() =>
              setMsg(
                'We have send you a verification link on your email. Please check your mail to verify your account',
              )
            }
            className='bg-customPurple rounded-3xl '
          />
        </Fragment>
      ) : (
        <p className='font-medium text-[14px] text-customGray '>{msg}</p>
      )}
    </>
  );
}
