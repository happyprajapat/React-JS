import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const reactElement = {
  type: 'a',
  props: {
      href:'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement = (
  <a href="https://google.com" >Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp /> // Works
    // reactElement // Do not work
    // <reactElement />// Do not work
    // reactElement() // Do not work

    anotherElement //Works
    // <anotherElement /> //Do not Works
    // anotherElement() //Do not Works


)
