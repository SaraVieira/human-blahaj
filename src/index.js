import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SharkPage from './Shark'
import All from './All'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<SharkPage />} />
        <Route path="all" element={<All />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
