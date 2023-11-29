import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path='/' Component={Dashboard} />
          </Routes>
        </Router>
    </>
  )
}

export default App
