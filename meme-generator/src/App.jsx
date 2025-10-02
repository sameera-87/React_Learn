import React from "react"

export default function App(props){

  const [starWarsData, setstarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  console.log("Rendered")

  React.useEffect(() => {
    console.log("Effect ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setstarWarsData(data))
  }, [count])
 
  // React.useEffect(function() {
  //   console.log("Effect ran")
  //   fetch("https://swapi.dev/api/people/1")
  //     .then(res => res.json())
  //     // .then(data => setstarWarsData(data))
  // }, [0])


  return(
    <div>
      <h2>The Count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
      <pre>{JSON.stringify(starWarsData , null, 2)}</pre>
    </div>
  )
}


// 10.22 - stop