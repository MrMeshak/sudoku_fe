export interface IBoardHistory {
  playerBoard: number[];
  hintBoard: number[];
  notesBoard: Set<number>[];
  mistakeIndexes: Set<number>;
  errorIndexes: Set<number>;
}

export interface IBaseCell {
  index: number;
  value: string;
}

export interface IPlayerCell extends IBaseCell {
  __typename: 'IPlayerCell';
  hasError: boolean;
}

export interface IHintCell extends IBaseCell {
  __typename: 'IHintCell';
}

export interface IPuzzleCell extends IBaseCell {
  __typename: 'IPuzzleCell';
}

export interface ISolutionCell extends IBaseCell {
  __typename: 'ISolutionCell';
}

export interface IEmptyCell extends IBaseCell {
  __typename: 'IEmptyCell';
}

export interface INoteCell {
  __typename: 'INoteCell';
  index: number;
  notes: Set<number>;
}

export type TGameCell =
  | IPlayerCell
  | IHintCell
  | IPuzzleCell
  | INoteCell
  | IEmptyCell;
