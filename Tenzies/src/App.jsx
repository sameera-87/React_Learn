import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App(){

  const [dice, setDice] = useState(generateAllNewDice())
  
  function generateAllNewDice(){
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        id: nanoid()
      }))

    // const newDice = []
    // for(let i = 0; i < 10; i++) {
    //   const rand = Math.ceil(Math.random() * 6)
    //   newDice.push(rand)
    // }
  }

  function rollDice(){
    setDice(oldDice => oldDice.map(die =>
      die.isHeld ?
        die :
        {...die, value: Math.ceil(Math.random() * 6)}
    ))
  }

  function hold(id){
    setDice(oldDice => oldDice.map(die => 
        die.id === id ?
          {...die, isHeld: !die.isHeld} :
          die
      ))
  }

  // console.log(generateAllNewDice())

  const diceElements = dice.map(dieObj => 
    <Die 
      key={dieObj.id} 
      value={dieObj.value} 
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  )

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll untill all dices are the same. Click each die to freeze
       it at its current value between rolls.
      </p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}