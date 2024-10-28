'use client';
//react imports
import { useState } from 'react';
//view imports
import ExternalFundsView from './ExternalFunds';
import FundSuccessView from './FundSuccess';
//next imports
import { usePathname } from 'next/navigation';
import SendFundsView from './SendFunds';

export default function FundsView() {
  const path: string = usePathname();
  const pathName: string = path.substring(1, path.length);
  const [state] = useState<boolean>(false);
  return (
    <div
      className={`flex   items-start justify-center sm:gap-5 md:gap-0 mt-2 ${pathName == 'externalFunds' ? 'h-[80%] sm:flex-row flex-col' : 'h-[80%] sm:flex-col md:flex-row flex-col'}  w-[90%] ${pathName == 'externalFunds' ? 'lg:w-4/5' : 'w-full'}`}
    >
      {pathName == 'externalFunds' ? (
        state ? (
          <FundSuccessView />
        ) : (
          <ExternalFundsView />
        )
      ) : (
        <SendFundsView />
      )}
    </div>
  );
}
