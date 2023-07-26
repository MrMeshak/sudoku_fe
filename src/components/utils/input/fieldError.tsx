export interface IInputFieldErrorProps {
  message?: string;
}

export function FieldError({ message }: IInputFieldErrorProps) {
  return (
    <p className="text-greyScale-500 absolute -bottom-4 text-xs italic">
      {message}
    </p>
  );
}
