import cat1 from "./images/cat1.jpg"
import cat2 from "./images/cat2.jpg"
import cat3 from "./images/cat3.jpg"
import cat4 from "./images/cat4.jpg"
import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact 
        img = {cat1}
        name = "Mr.Whiskerson"
        phone = "(212) 555-1234"
        email = "mr.whiskrson@gmail.com"
      />

      <Contact 
        img = {cat2}
        name = "Fluffy"
        phone = "(310) 555-5678"
        email = "fluffy.cat@gmail.com"
      />

      <Contact 
        img = {cat3}
        name = "Shadow"
        phone = "(646) 555-8765"
        email = "shadowkitty@yahoo.com"
      />

      <Contact 
        img = {cat4}
        name = "Luna"
        phone = "(415) 555-4321"
        email = "luna.meow@outlook.com"
      />
    </div>
  )
}

export default App