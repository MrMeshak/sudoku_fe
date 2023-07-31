export interface ISolverCell {
  index: number;
  value: string;
  type: 'puzzle' | 'solution' | 'empty';
}
