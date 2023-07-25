'use client';
import { useFormik } from 'formik';
import { TextField } from '../utils/input/textField';

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
        <div className="mb-5">
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
          />
        </div>
      </form>
      <div>{formik.values.sudokuBoardStr}</div>
    </>
  );
}
