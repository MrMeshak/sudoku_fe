export function shuffle<T>(array: Array<T>): Array<T> {
  const shuffledArray = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i);
    arraySwap(shuffledArray, i, j);
  }

  return shuffledArray;
}

function arraySwap<T>(array: Array<T>, i: number, j: number) {
  const a = array[i];
  array[i] = array[j];
  array[j] = a;
  return;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);
console.log(shuffle(array));
