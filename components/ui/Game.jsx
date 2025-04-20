// components/ui/Game.jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Board from './Board';

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const currentCopy = historyCopy[historyCopy.length - 1];
    const squaresCopy = [...currentCopy.squares];
    
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    
    setHistory([...historyCopy, { squares: squaresCopy }]);
    setStepNumber(historyCopy.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };

  let status;
  if (winner) {
    status = `勝者: ${winner}`;
  } else if (history[stepNumber].squares.every(square => square !== null)) {
    status = '引き分け！';
  } else {
    status = `次のプレイヤー: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <View style={styles.game}>
      <Text style={styles.title}>〇×ゲーム</Text>
      <Text style={styles.status}>{status}</Text>
      <Board
        squares={current.squares}
        onPress={(i) => handleClick(i)}
      />
      <Button
        title="ゲームをリセット"
        onPress={() => jumpTo(0)}
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  status: {
    marginBottom: 10,
    fontSize: 18,
  },
});

export default Game;
