interface IPlayerMoveError {}

interface IPlayerMoveValid {}

type TGameMove = IPlayerMoveValid | IPlayerMoveError;

type TNote =
  | {
      __typename: 'TNote';
      index: number;
      values: Set<number>;
    }
  | undefined;

interface IPlayerCell {
  __typename: 'IPlayerCell';
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

interface IPlayerErrorCell {
  __typename: 'IPlayerErrorCell';
  value: number;
}

type TGameCell = IPlayerCell | IPuzzleCell | ISolutionCell | INoteCell;
