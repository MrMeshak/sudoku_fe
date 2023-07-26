export interface ISolverHeaderProps {}

export default function SolverHeader(props: ISolverHeaderProps) {
  return (
    <div className=" border-b-2 border-t-2 bg-slate-50 px-8 py-6">
      <h1 className=" mb-1 text-5xl font-semibold ">Solver</h1>
      <p>Generate a solution for your Sudoku puzzles</p>
    </div>
  );
}
