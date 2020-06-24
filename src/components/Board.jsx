import React, { useState, useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import Move from "./Move";
import { setOriginalNode } from "typescript";

export default function Board(props) {
  const [player, setPlayer] = useState("X");
  const [reset, setReset] = useState(false);
  const [count, setCount] = useState([]);
  const [won, setWon] = useState(false);
  const [x, setX] = useState([]);
  const [o, setO] = useState([]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var arrayWin = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]].map(e => e.map(String));

  function changePlayer(e) {
    var a = e.target.id;

    setCount([...new Set(count), a].filter(e => e));
    if (!count.includes(e.target.id)) {
      if (player === "X") {
        setPlayer("O");
        setX([...new Set(x), a].filter(e => e));
      } else {
        setPlayer("X");
        setO([...new Set(o), a].filter(e => e));
      }
    }
    console.log('a', a)
    console.log('x', x)
    console.log('o', o)
    console.log('count',count)
  }

  function resetBoard() {
    setReset(true);
  }

  useEffect(() => {
    setReset(false);
    setCount([]);
    setX([]);
    setO([]);
    setWon(false);
  }, [reset]);

  function winner(a) {
    return arrayWin.filter(e => e.every(e => a.includes(e)))
  }

  useEffect(() => {
    if (count.length >= 3) {
      if (winner(o).length) {
        console.log('O won')
        setWon(true);
        setPlayer('O')
      }
      else if (winner(x).length) {
        console.log('X won');
        setPlayer('X')
        setWon(true);
      }
    }
  }, [player])

  return (
    <div>
      {(won) ? <h1 className = 'playerWon' >Player {player} Won !!</h1> : <h1>Player turn:{player}</h1>}
      <div className="board" onClick={changePlayer}>
        {arr.map((e, i) => <Move key={i} id={i + 1} symbol={player} reset={reset} onClick={changePlayer} won={won}/>)}
      </div>
      {(won) ? <button onClick={resetBoard}>Play Again!</button> : <button onClick={resetBoard}>reset</button >}
    </div>
  );
}
