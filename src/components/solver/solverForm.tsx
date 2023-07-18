import * as React from 'react';
import { TextField } from '../utils/input/textField';

interface ISolverFormValues {
  sudokuStr: String;
}

export interface ISolverFormProps {}

export default function SolverForm(props: ISolverFormProps) {
  return (
    <form className="m-8">
      <div className="mb-5">
        <label htmlFor="sudokuStr">Sudoku Board</label>
        <TextField />
      </div>
    </form>
  );
}
