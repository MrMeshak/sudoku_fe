import { InputHTMLAttributes, ReactElement } from 'react';
import { FieldError } from './fieldError';
import { read } from 'fs';

export interface ITextFieldProps {
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  onBlur: InputHTMLAttributes<HTMLInputElement>['onBlur'];
  id: InputHTMLAttributes<HTMLInputElement>['id'];
  name: InputHTMLAttributes<HTMLInputElement>['name'];
  placeholder: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  hasError: boolean;
  errorMessage?: string;
  touched?: boolean;
  maxLength?: number;
  readonly?: boolean;
}

export function TextField(props: ITextFieldProps) {
  const {
    onChange,
    onBlur,
    id,
    name,
    placeholder,
    errorMessage,
    touched,
    maxLength,
    readonly,
  } = props;

  return (
    <div className="relative">
      <input
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`bg-greyScale-50 text-greyScale-900 placeholder-greyScale-500 focus:ring-dark3 w-full rounded-xl border border-slate-300 py-2 pl-4 pr-4 font-light focus:outline-none ${
          readonly && 'text-slate-400 focus:ring-2'
        }`}
        id={props.id}
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        maxLength={maxLength}
        readOnly={readonly}
      />
      {touched && errorMessage ? (
        <FieldError message={props.errorMessage} />
      ) : null}
    </div>
  );
}
