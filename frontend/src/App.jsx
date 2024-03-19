import React from 'react'
import "./App.css";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Home from './Pages/Home'
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='*' element={<NotFound/>}/>   {/* Star(*) is used as a wildcard path so that if any page doesnt render, the NotFound page will render */}
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App