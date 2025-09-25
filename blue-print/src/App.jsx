import React from "react"

export default function App(){

  const [myFavouriteThings, setMyFavouriteThings] = React.useState([])
  const allFavouriteThings = [
    "🎶", "😘", "😇", "🦖", "🐬", "🐧", 
    "🚴‍♂️", "🎈", "🎇", "⚾", "🥎", "🏀",
    "🏐", "🏈", "🏉", "🏏", "🎳", "🥌",
    "⛳", "⛸️", "🎯", "🥊", "🏓", "🏑",
    "🏸", "🎾", "🎤", "🎹", "📕", "📖"
  ]

  const thingsElements = myFavouriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavouriteThing(){
    setMyFavouriteThings(
      prevFavThings => [
        ...prevFavThings,
        allFavouriteThings[prevFavThings.length]
      ]
    )
  }

  return(
    <main>
      <button onClick={addFavouriteThing}>Add item</button>
      <section aria-live="police">
        {thingsElements}
      </section>
    </main>
  )
}