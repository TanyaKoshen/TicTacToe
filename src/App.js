import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import {useEffect, useState} from "react";
import Square from "./Square";


const borderStyle = {
  border: 'none',
  paddingBlock: '10px',
  width: '300px',
  height: '300px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
}

function App() {
  const siteName = 'TicTacToe'
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gamerX, setGamerX] = useState(true);
  const [winner, setWinner] = useState(undefined)

  useEffect(() => {
    calculateWinner()
  }, [board])

  const handleMove = (ind, element) => {

    const gamer = gamerX ? "X" : "0"
    if (!element) {
    setBoard(board.map((el, i) => (
      i === ind ?  gamer: el
    )))
    setGamerX(!gamerX);
  }}

  const calculateWinner = () => {
    const winningCombination = [
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    for (let i = 0; i < winningCombination.length; i++) {
      const [a, b, c] = winningCombination[i];  // destructuring of Array winningCombination
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      setWinner(`${board[a]} player won!`)
      }
    }
  }


  return (

    <div className='App'>
      <Header siteName={siteName}/>
      <div style={borderStyle}
     >
        {board.map((el, i) => (
          <Square key={i}
                  el={el}
                  index={i}
                  handleMove={handleMove}
          />
        ))}
      </div >
      <div style={{margin: '50px'}}>
        <h2>{winner} </h2>
      </div>
    </div>
  );
}

export default App;
