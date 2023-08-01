import GameBoard from '@/components/game/gameBoard';
import GameGame from '@/components/game/gameGame';
import GameHeader from '@/components/game/gameHeader';
import GameSettings from '@/components/game/gameSettings';

export interface IGamePageProps {}

export default function GamePage(props: IGamePageProps) {
  return (
    <div>
      <GameHeader />
      <GameSettings />
      <GameGame />
    </div>
  );
}
