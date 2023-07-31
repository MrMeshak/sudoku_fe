import GameBoard from '@/components/game/gameBoard';
import GameGame from '@/components/game/gameGame';
import GameHeader from '@/components/game/gameHeader';

export interface IGamePageProps {}

export default function GamePage(props: IGamePageProps) {
  return (
    <div>
      <GameHeader />
      <GameGame />
    </div>
  );
}
