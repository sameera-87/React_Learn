import { StrictMode } from 'react'

import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.querySelector('#root'))
// const reactElement = createElement("h1", null, "Hello from createElement!")

const reactElement = <h1>Hello from JSX!</h1>

console.log(reactElement)

function MainContent(){
  return <h1>React is great!</h1>
}

root.render(
  <div>
    <MainContent />
  </div>
)
