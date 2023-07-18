import SolverForm from '@/components/solver/solverForm';
import SolverHeader from '@/components/solver/solverHeader';
import * as React from 'react';

export interface ISolverPageProps {}

export default function SolverPage(props: ISolverPageProps) {
  return (
    <div>
      <SolverHeader />
      <SolverForm />
    </div>
  );
}
