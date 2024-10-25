'use client';
import { useState } from 'react';
import ExternalFundsView from './ExternalFunds';
import FundSuccessView from './FundSuccess';

export default function FundsView() {
  const [state, setState] = useState<boolean>(false);
  return <>{state ? <FundSuccessView /> : <ExternalFundsView />}</>;
}
