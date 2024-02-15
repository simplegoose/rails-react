import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './routes'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Index />}/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
