let board = ['', '', '', '', '', '', '', '', ''];
let turn = 'X';

const cells = document.querySelectorAll('.cell');

function handleClick(e) {
  const index = e.target.dataset.index;
  if (board[index] !== '') return; // Cell already taken

  board[index] = turn;
  e.target.textContent = turn;
  e.target.classList.add('taken');

  if (checkWinner()) {
    setTimeout(() => alert(`${turn} wins!`), 100);
    resetBoard();
  } else {
    turn = turn === 'X' ? 'O' : 'X';
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('taken');
  });
}

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});
