import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'

let timer = 0

const root = ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Home seconds={timer} />
    </React.StrictMode>
  )
  timer++
}, 1000)