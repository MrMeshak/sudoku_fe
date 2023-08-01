'use client';
import { useGameActions } from '@/store/gameStore/gameStore';
import Select, { ISelectOption } from '../utils/select/select';

export interface IGameSettingsProps {}

export default function GameSettings(props: IGameSettingsProps) {
  const difficultyOptions: ISelectOption[] = [
    { label: 'Easy', value: '1' },
    { label: 'Medium', value: '2' },
    { label: 'Hard', value: '3' },
    { label: 'Expert', value: '4' },
    { label: 'Evil', value: '5' },
  ];
  const { setSettings, generatePuzzle } = useGameActions();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setSettings({ difficulty: value });
    generatePuzzle();
  };

  return (
    <div className="mx-8 my-4">
      <Select options={difficultyOptions} onChange={handleSelect} />
    </div>
  );
}
