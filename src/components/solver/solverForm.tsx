'use client';
import { useState } from 'react';
import { useFormik } from 'formik';
import { TextField } from '../utils/input/textField';
import SolverBoard from './solverBoard';
import { generateBoxBoardCells } from '@/sudoku/sudokuSolver/generateBoxBoardCells';
import { stringBoardToBoard } from '@/sudoku/sudokuSolver/stringBoardToBoard';
import { useSolverActions } from '@/store/solverStore/solverStore';

interface ISolverFormValues {
  sudokuBoardStr: string;
}

type FormStatus = 'input' | 'display';

export interface ISolverFormProps {}

export default function SolverForm(props: ISolverFormProps) {
  const { solve, reset } = useSolverActions();

  const [formStatus, setFormStatus] = useState<FormStatus>('input');

  const handleResetBtn = () => {
    setFormStatus('input');
    reset();
  };

  const initalValues: ISolverFormValues = {
    sudokuBoardStr: '',
  };

  const onSubmit = (values: ISolverFormValues) => {
    setFormStatus('display');
    solve(formik.values.sudokuBoardStr);
  };

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
      <form onSubmit={formik.handleSubmit} className="m-8">
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
            readonly={formStatus === 'display' ? true : false}
          />
        </div>
        {formStatus === 'input' ? (
          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-3 py-1 text-white"
          >
            solve
          </button>
        ) : null}
        {formStatus === 'display' ? (
          <button
            type="button"
            onClick={handleResetBtn}
            className="rounded-lg bg-slate-500 px-3 py-1 text-white"
          >
            reset
          </button>
        ) : null}
      </form>
      <div className="m-8">
        {formStatus === 'input' ? (
          <SolverBoard
            boxBoardCells={generateBoxBoardCells(
              stringBoardToBoard(formik.values.sudokuBoardStr),
            )}
          />
        ) : null}
      </div>
    </>
  );
}
