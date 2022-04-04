import { useState, useEffect } from 'react'
import { Route, Routes, NavLink, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import AddFish from './pages/AddFish/AddFish'
import FishList from './pages/FishList/FishList'
import * as fishService from './services/fishes'

function App() {
  const [fishes, setFishes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fishService.getAll()
    .then(allFishes => setFishes(allFishes))
  }, [])

  const handleAddFish = async newFishData => {
    const newFish = await fishService.create(newFishData)
    setFishes([...fishes, newFish])
    navigate('/')
  }

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
        <Route path='/add' element={<AddFish handleAddFish={handleAddFish}/>} />
        <Route path='/' element={<FishList fishes={fishes}/>} />
				</Routes>
      </main>
    </div>
  )
}

export default App
