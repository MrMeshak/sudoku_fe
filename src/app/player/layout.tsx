import NavBar from '@/components/utils/navigation/navBar';

export default function GamePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
