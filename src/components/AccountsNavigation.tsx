interface IAccountsNavigation {
  text: string;
  checked?: boolean;
  handleClick: (tab: string) => void;
}
export default function AccountsNavigation({
  text,
  checked = false,
  handleClick,
}: IAccountsNavigation) {
  return (
    <div className={`flex items-center gap-2 ${!checked && 'ml-3'} `}>
      {' '}
      {checked && (
        <div className='w-[5px]  rounded-md h-[19px] bg-customPurple transition-all duration-300 ease-in-out'></div>
      )}
      <button
        onClick={() => handleClick(text)}
        className={`text-[14px] md:text-[19px] ${text == 'Logout' && 'text-red-500'}`}
      >
        {text}
      </button>
    </div>
  );
}
