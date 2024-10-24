'use client';
import AccountsNavigation from '@/components/AccountsNavigation';
import { useState } from 'react';
import ProfileAndSecurityView from './ProfileAndSecurity';
import NotificationsView from './Notifications';
import PaymentMethodView from './PaymentMethod';
import OrderHistoryView from './OrderHistory';
import ChangePasswordView from './ChangePassword';
import HeaderText from '@/components/HeaderText';
import ProductContainer from '@/components/ProductContainer';

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
      <div className='hidden mt-5 w-[50%] md:w-[50%] lg:w-[30%]  sm:flex flex-col items-start gap-3'>
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
      <div
        className={`w-full   ${tab == 'My Coupons' ? 'w-full bg-[#F9F9F9] z-50 pl-4 overflow-y-auto h-[470px]  custom-scrollbar' : 'lg:w-[50%]'} `}
      >
        <HeaderText headerText={tab} />
        {tab === 'My Coupons' && <ProductContainer isMyCoupon={true} />}
        {tab === 'Profile & Security' && <ProfileAndSecurityView />}
        {tab === 'Notifications' && <NotificationsView />}
        {tab == 'Payment Method' && <PaymentMethodView />}
        {tab == 'Order History' && <OrderHistoryView />}
        {tab == 'Change Password' && <ChangePasswordView />}
      </div>
    </>
  );
}
