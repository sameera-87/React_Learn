import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const nums = [1, 2, 3, 4, 5]

const squares = nums.map(function(num) {
  return num * num
})

console.log(squares)

const names = ["alice", "bob", "charlie", "danielle"]

const capitalizedNames = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
})

console.log(capitalizedNames)


const pokemon = ["Bulbasuar", "Charmeander", "Squirtle"]

const paragarphs = pokemon.map(mon =>'<p>${mon}</P>')

console.log(paragarphs)

createRoot(document.getElementById('root')).render(
  <App/>
)
