import { shuffle } from '@/sudoku/sudoku';

export interface IAppProps {}

export default function App(props: IAppProps) {
  const array = [1, 2, 3, 4, 5];
  console.log(shuffle(array));

  return <div></div>;
}
