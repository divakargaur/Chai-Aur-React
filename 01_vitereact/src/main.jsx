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

const anotherElement = (<a href='https://google.com' target='_blank' rel='noreferrer'>Visit Google</a>)

const anotherUser = "Chai Aur React"

const reactElement = React.createElement(
  'p',
  {
    href:'https://google.com',
    target: '_blank'
  },
  'Click Me To Visit Google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // MyApp()
    // <MyApp />
    // <App />
    // anotherElement
    reactElement
  // </React.StrictMode>,
)
