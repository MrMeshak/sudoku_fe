import NavBar from '@/components/utils/navigation/navBar';

export default function PlayerPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
