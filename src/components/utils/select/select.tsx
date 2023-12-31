import { AlertCircleIcon, ArrowDownIcon } from '../icons/iconly';

export interface ISelectOption {
  label: string;
  value: string;
}

export interface ISelectProps {
  options: ISelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ options, onChange }: ISelectProps) {
  return (
    <div className="relative w-fit">
      <select
        name="select"
        onChange={onChange}
        className="border-slate-3200 appearance-none rounded-md border-2 bg-white py-2 pl-2 pr-8 font-semibold text-slate-300 outline-slate-300 "
      >
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      <span className=" pointer-events-none absolute right-2 top-1/2 block -translate-y-1/2 rounded-md bg-white text-slate-300">
        <ArrowDownIcon className="h-4 w-4" strokeWidth="3" />
      </span>
    </div>
  );
}
