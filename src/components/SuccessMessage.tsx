interface ISuccessMessage {
  msg: string;
  email: string;
}
export default function SuccessMessage({ msg, email }: ISuccessMessage) {
  return (
    <div className='flex font-lato flex-col items-center text-center gap-4 w-[220px]  h-auto'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        width={51}
        height={51}
        fill='#6154A4'
      >
        <path d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z' />
      </svg>
      <h3>{msg}</h3>
      <p className='text-[12px] text-customTextSix'>
        Your ordering information will be forwarded to your email{' '}
      </p>
      <p className='text-customTextThree text-[12px]'>
        {email || 'example@email.com'}
      </p>
    </div>
  );
}
