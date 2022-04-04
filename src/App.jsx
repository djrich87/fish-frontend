import { useState, useEffect } from 'react'
import { Route, Routes, NavLink, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import AddFish from './pages/AddFish/AddFish'
import FishList from './pages/FishList/FishList'
import * as fishService from './services/fishes'
import * as authService from './services/authService'
import EditFish from './pages/EditFish/EditFish'

function App() {
  const [fishes, setFishes] = useState([])
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())


  useEffect(() => {
    if(user) {
    fishService.getAll()
    .then(allFishes => setFishes(allFishes))
    }
  }, [user])
  

  const handleAddFish = async newFishData => {
    const newFish = await fishService.create(newFishData)
    setFishes([...fishes, newFish])
    navigate('/')
  }

  const handleDeleteFish = id => {
    fishService.deleteOne(id)
    .then(deletedFish => setFishes(fishes.filter(fish => fish._id !== deletedFish._id)))
  }

  const handleUpdateFish = updatedFishData => {
    fishService.update(updatedFishData)
    .then(updatedFish => {
    const newFishesArray = fishes.map(fish => 
      fish._id === updatedFishData._id ? updatedFishData : fish
    )
    setFishes(newFishesArray)
		navigate('/')
    })
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
        <Route
            path='/'
            element={
              user ?
              <FishList
                handleDeleteFish={handleDeleteFish}
                fishes={fishes}
                user={user} 
              />
              :
              <Navigate to='/login' />
            }
          />
        <Route path='/edit' element={<EditFish handleUpdateFish={handleUpdateFish}/>} />
				</Routes>
      </main>
    </div>
  )
}

export default App
