import Logo from '@/components/utils/navigation/navBar';
import Link from 'next/link';

export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  return (
    <nav className="px-4 border-b-2 flex justify-between items-center">
      <div className="flex items-center">
        <svg className="w-8 h-8" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.75" y="0.75" width="26.5" height="26.5" stroke="black" strokeWidth="3" />
          <line x1="9.75" y1="3.27835e-08" x2="9.75" y2="28" stroke="black" strokeWidth="2" />
          <line x1="18.75" y1="1" x2="18.75" y2="27" stroke="black" strokeWidth="2" />
          <line x1="1" y1="9.25" x2="27" y2="9.25" stroke="black" strokeWidth="2" />
          <line x1="1" y1="18.25" x2="27" y2="18.25" stroke="black" strokeWidth="2" />
        </svg>
        <h1 className="ml-2 text-xl font-semibold">Sudoku</h1>
      </div>
      <ul className="flex p-4 rounded-sm font-semibold list-none">
        <li className="block pr-4">
          <Link className="hover:underline underline-offset-2 " href="/">
            Player
          </Link>
        </li>
        <li className="block">
          <Link className="hover:underline underline-offset-2" href="/">
            Solver
          </Link>
        </li>
      </ul>
    </nav>
  );
}
