import SolverForm from '@/components/solver/solverForm';
import SolverHeader from '@/components/solver/solverHeader';

export interface ISolverPageProps {}

export default function SolverPage(props: ISolverPageProps) {
  return (
    <div>
      <SolverHeader />
      <SolverForm />
    </div>
  );
}
