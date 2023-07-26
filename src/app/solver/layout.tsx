import NavBar from '@/components/utils/navigation/navBar';

export default function SolverPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
