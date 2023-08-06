import SolverForm from '@/components/solver/solverForm';
import SolverHeader from '@/components/solver/solverHeader';
import SolverSolution from '@/components/solver/solverSolution';

export interface ISolverPageProps {}

export default function SolverPage(props: ISolverPageProps) {
  return (
    <div>
      <SolverHeader />
      <div className="flex justify-center">
        <div className=" w-full md:max-w-2xl">
          <SolverForm />
          <SolverSolution />
        </div>
      </div>
    </div>
  );
}
