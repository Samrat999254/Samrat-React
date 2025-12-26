import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Samrat from './Samrat.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Lets conquer React"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target: '_blank'
  }, 
  'Click me to visit Google',
  anotherElement,
  anotherUser
  
)

createRoot(document.getElementById('root')).
render(
  <StrictMode>
    <App />
    <Samrat />
    <MyApp />
  </StrictMode>
)
