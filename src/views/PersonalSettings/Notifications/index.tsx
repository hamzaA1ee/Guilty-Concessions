import HeaderText from '@/components/HeaderText';
import { CheckBox } from '@/components/Input/CheckBox';

export default function Notifications() {
  const checkValues: string[] = ['Email', 'Text', 'Push Notificaitons'];
  return (
    <>
      <HeaderText headerText='Notifications' />
      <div className='flex flex-col gap-6 '>
      {checkValues.map((val, index) => (
        <CheckBox
        
          text={val}
          key={index}
        />
      ))}
      </div>
    </>
  );
}
