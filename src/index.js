import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SharkPage from './Shark'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<SharkPage />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
