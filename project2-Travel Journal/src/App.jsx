import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

//import images
import australia from "./assets/australia.jpg"
import france from "./assets/france.jpg"
import japan from "./assets/japan.jpg"

export default function App() {

  const entryElements = data.map((entry) =>{
    return (
      <Entry
        key={entry.id}
        entry={entry}
      />
    )
  })

  console.log(entryElements)

  return(
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )

}

