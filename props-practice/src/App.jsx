import Joke from "./Joke"

export default function App() {
  return (
    <main>
      <Joke 
        setup = "Why did the scarecrow win an award?"
        punchline = "Because he was outstanding in his field."
      />
      <Joke 
        setup = "Why don’t oysters give to charity?"
        punchline = "Because they’re shellfish."
      />
      <Joke 
        setup = "Why can’t your nose be 12 inches long?"
        punchline = "Because then it would be a foot."
      />
      <Joke 
        setup = "Why did the computer go to the doctor?"
        punchline = "Because it caught a virus."
      />
      <Joke 
        setup = "Why don’t eggs tell jokes?"
        punchline = "Because they’d crack each other up."
      />
    </main>
  )
}
