import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
const user = "Happy Prajapat"

  return (
    <div>
      <h1>Custom App | {user}</h1>
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

// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com',target: '_blank'},
//   'Click me to visit google'
// )


ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp /> // Works
    // reactElement // Do not work
    // <reactElement />// Do not work
    // reactElement() // Do not work

    // anotherElement //Works
    // <anotherElement /> //Do not Works
    // anotherElement() //Do not Works

    // reactElement;
)
