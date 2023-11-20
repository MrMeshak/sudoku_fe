
# Sudoku
Sudoku is a website to play and solve sudoku puzzles. The inspiration for this project came from my wife who loves solving sudoku puzzles. I decided to challenge myself to see if I could solve a sudoku puzzle using my programming skills and hopefully impress her :)


## Demo & Snippets

[https://sudoku-fe.vercel.app/game](https://sudoku-fe.vercel.app/game)

**Sudoku - New Game**

![Sudoku_player](https://github.com/MrMeshak/sudoku_fe/assets/94204153/a180dc91-bf79-4855-80be-5a018c248d5f)

**Sudoku - Gameplay (Hints, Notes, Mistakes)**

![Sudoku_gameplay](https://github.com/MrMeshak/sudoku_fe/assets/94204153/4397416b-93a3-48d6-8f8a-5723691de0a4)

**Sudoku Solver - User Input Board**

![Sudoku_solver_input](https://github.com/MrMeshak/sudoku_fe/assets/94204153/4118f85e-7753-4e86-a3b3-ade9adfc9f63)

**Sudoku Solver - Solved Board**

![Sudoku_solver_solution](https://github.com/MrMeshak/sudoku_fe/assets/94204153/7f97c8ab-e002-414b-91d2-aaecb6476033)


## Features
*Sudoku Player*
* **Board Generation** - Generates a valid sudoku puzzle and supports 5 difficulty level. The puzzle is generated using a backtracking algorithm with extention to ensure that there is only a single unique solution.

* **Mistake Detection** - Detects any conflicting numbers and highlights them in red.

* **Hints** - Using the hint button that will randomly place a correct number into the board and highlight it in green.

* **Notes** - Supports notes in each cell

* **Undo** - Supports full game history with unlimited undos.

* **Erase** - Erase a previously placed number

*Sudoku Solver*
* **Input Feedback**: live input feedback as players enter the board to be solved

## Learnings

* **Backtracking Algorithm**: Through this project I learned how a backtracking algorithm works and implemented my own backtracking algorithm. Some of the challenging aspects included ensuring that there was only a single unique solution for a generated board.

## Technologies
* NextJS
* TailwindCSS
* Zustand
* Jest





