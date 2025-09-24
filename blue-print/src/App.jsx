import React from "react"

export default function App(){
  let [isImportant, setIsImportant] = React.useState("Yes")
  // setIsImportant("Heck Yess!")

  function handleClick(){
    setIsImportant("Definitely")
  }

  return(
    <main>
      <h1 className="title">Is state important to know</h1>
      <button onClick={handleClick} className="value">{isImportant}</button>
    </main>
  )
}