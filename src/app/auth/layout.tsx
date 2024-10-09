import NavBarComponent from '@/components/NavBar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBarComponent />
      {children}
    </>
  );
}
