import BubbleGroup from '@/components/BubbleGroup';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BubbleGroup />
    </>
  );
}
