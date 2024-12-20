import { useState } from 'react';
import styles from './App.module.css';
import Die from './Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice);

 const gameWon = dice.every(die => die.isHeld) && 
  dice.every(die => die.value === dice[0].value);
  
  function generateAllNewDice() {
      return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }));
  }
  
  function rollDice() {
    if (gameWon) {
      setDice(generateAllNewDice());
    } else {
      setDice(prevDice =>
        prevDice.map(die =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  }

  function hold(id) {
    setDice(prevDice =>
      prevDice.map(die =>
        die.id === id? {...die, isHeld: !die.isHeld}
        : die
      )
    )
  }

  const diceElements = dice.map(diceObj => (
    <Die 
      key={diceObj.id} 
      value={diceObj.value} 
      isHeld={diceObj.isHeld}
      hold={() => hold(diceObj.id)}
      />
    ));

  return (
    <main>
      {gameWon && <Confetti />}
      <div className={styles.container}>
        <h1 className={styles.title}>Tenzies</h1>
        <p className={styles.instructions}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className={styles.diceContainer}>
          {diceElements}
        </div>
        <button className={styles.rollButton} onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  )
}