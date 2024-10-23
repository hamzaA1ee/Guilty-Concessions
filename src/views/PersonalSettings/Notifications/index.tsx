import { CheckBox } from '@/components/Input/CheckBox';

export default function NotificationsView() {
  const checkValues: string[] = ['Email', 'Text', 'Push Notificaitons'];
  return (
    <>
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
