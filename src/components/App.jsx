import { useState } from 'react'
import styles from './App.module.css'
import Die from './Die'

export default function App() {
  function generateAllNewDice() {
      return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }
  const [diceArray, setDiceArray] = useState(generateAllNewDice);
  
  function rollDice() {
    setDiceArray(generateAllNewDice());
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.diceContainer}>
          {diceArray.map(
            (value, index) => (<Die key={index} value={value} />)
          )}
        </div>
        <button onClick={rollDice}>Roll Dice</button>
      </div>
    </main>
  )
}