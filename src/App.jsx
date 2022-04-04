import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import AddFish from './pages/AddFish/AddFish'

function App() {
  const [fishes, setFishes] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        React Fish CRUD
        <nav>
          <NavLink to='/'>Fish List</NavLink>
          <NavLink className='m-left' to='/add'>Add Fish</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
	        <Route path='/add' element={<AddFish />} />
				</Routes>
      </main>
    </div>
  )
}

export default App
