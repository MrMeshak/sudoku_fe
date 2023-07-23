import { create } from 'zustand';

interface ISolverCell {
  status: string;
}

interface ISolverState {
  starterBoard: number[];
  solutionBoard: number[];
}
