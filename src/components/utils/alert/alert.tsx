import { AlertCircleIcon, TickIcon } from '@/components/utils/icons/iconly';

export interface IAlertProps {
  message: string;
}

export function AlertSuccess({ message }: IAlertProps) {
  return (
    <div className="flex rounded-lg bg-green-200 px-4 py-2 text-green-900">
      <TickIcon />
      <p className="ml-2">{message}</p>
    </div>
  );
}

export function AlertError({ message }: IAlertProps) {
  return (
    <div className="flex rounded-lg bg-red-200 px-4 py-2 text-red-900">
      <AlertCircleIcon />
      <p className="ml-2">{message}</p>
    </div>
  );
}
