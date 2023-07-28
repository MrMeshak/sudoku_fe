interface IGameMove {
  index: number;
  value: number;
}

interface IPuzzleCell {
  __typename: 'IPuzzleCell';
  value: number;
}

interface ISolutionCell {
  __typename: 'ISolutionCell';
  value: number;
}

interface INoteCell {
  __typename: 'INoteCell';
  notes: Set<number>;
}

type TGameCell = IPuzzleCell | ISolutionCell | INoteCell;
