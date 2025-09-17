import { createRoot } from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
// import { Fragment } from "react"

import reactLogo from './assets/react.svg'

const root = createRoot(document.getElementById("root"))


function Page(){
  return(
    <>
      <Header />
      <MainContent />
      <Footer />
    </>

  )
}

root.render(
  <Page />
)

// function temporaryName(){
//   return (
//     <main>
//         <img src= {reactLogo} width="40px" alt="React logo"/>
//         <h1>Fun facts about React!</h1>
//         <ul>
//           <li>Was first release in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 200K stars on GitHub</li>
//           <li>Is maintained by Meta</li>
//           <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </main>
//   )
// }


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import './index.css'
// import App from './App.jsx'

// const root = createRoot(document.getElementById('root'))

// root.render(
//   <div>
//     <img src={reactLogo} className="logo react" alt="React logo" />
//     <h1>This is another element</h1>
//   </div>
 
// )
