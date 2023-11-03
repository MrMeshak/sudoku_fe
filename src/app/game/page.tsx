import GameBoard from '@/components/game/gameBoard';
import GameControls from '@/components/game/gameControls';
import GameGame from '@/components/game/gameGame';
import GameHeader from '@/components/game/gameHeader';
import GameSettings from '@/components/game/gameSettings';

export interface IGamePageProps {}

export default function GamePage(props: IGamePageProps) {
  return (
    <div>
      <GameHeader />

      <div className="flex justify-center">
        <div className="mx-8 w-full md:max-w-2xl">
          <GameSettings />
          <GameGame />
          <GameControls />
        </div>
      </div>
    </div>
  );
}
