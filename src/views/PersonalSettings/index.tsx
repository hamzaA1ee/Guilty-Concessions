'use client';
import AccountsNavigation from '@/components/AccountsNavigation';
import { useState } from 'react';
import ProfileAndSecurityView from './ProfileAndSecurity';
import Notifications from './Notifications';
import PaymentMethod from './PaymentMethod';
import OrderHistory from './OrderHistory';
import ChangePassword from './ChangePassword';

export default function PersonalSettingsView() {
  const buttons: string[] = [
    'My Coupons',
    'Profile & Security',
    'Notifications',
    'Payment Method',
    'Order History',
    'Change Password',
    'Logout',
  ];
  const [tab, setTab] = useState<string>(buttons[0]);

  return (
    <>
      <div className='hidden mt-5 w-[50%] md:w-[50%] lg:w-[30%] h-full   sm:flex flex-col items-start gap-3'>
        {buttons.map((buttonText, index) => (
          <AccountsNavigation
            key={index}
            text={buttonText}
            checked={buttonText == tab}
            handleClick={buttonText => setTab(buttonText)}
          />
        ))}
      </div>
      {/* here comes the sub tabs */}
      <div className='md:w-full lg:w-[50%]   '>
        {tab === 'Profile & Security' && <ProfileAndSecurityView />}
        {tab === 'Notifications' && <Notifications />}
        {tab == 'Payment Method' && <PaymentMethod />}
        {tab == 'Order History' && <OrderHistory />}
        {tab == 'Change Password' && <ChangePassword />}
      </div>
    </>
  );
}
