'use client';
import { useFormik } from 'formik';
import { TextField } from '../utils/input/textField';
import SolverBoard from './solverBoard';
import { generateBoxBoardCells } from '@/sudoku/sudokuSolver/generateBoxBoardCells';
import { stringBoardToBoard } from '@/sudoku/sudokuSolver/stringBoardToBoard';

interface ISolverFormValues {
  sudokuBoardStr: string;
}

export interface ISolverFormProps {}

export default function SolverForm(props: ISolverFormProps) {
  const initalValues: ISolverFormValues = {
    sudokuBoardStr: '',
  };

  const onSubmit = (values: ISolverFormValues) => {};

  const validate = (values: ISolverFormValues) => {
    const errors: Partial<ISolverFormValues> = {};
    return errors;
  };

  const formik = useFormik({
    initialValues: initalValues,
    onSubmit: onSubmit,
    validate: validate,
    validateOnChange: false,
  });

  return (
    <>
      <form className="m-8">
        <div className="mb-2">
          <label htmlFor="sudokuStr">Sudoku Board</label>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="sudokuBoardStr"
            name="sudokuBoardStr"
            placeholder=""
            hasError={Boolean(formik.errors.sudokuBoardStr)}
            errorMessage={formik.errors.sudokuBoardStr}
            touched={formik.touched.sudokuBoardStr}
            maxLength={81}
          />
        </div>
        <button className=" mr-2 rounded-lg bg-slate-400 px-3 py-1 text-white">
          reset
        </button>
        <button className="rounded-lg bg-slate-900 px-3 py-1 text-white">
          solve
        </button>
      </form>
      <div className="m-8">
        <SolverBoard
          boxBoardCells={generateBoxBoardCells(
            stringBoardToBoard(formik.values.sudokuBoardStr),
          )}
        />
      </div>
    </>
  );
}
