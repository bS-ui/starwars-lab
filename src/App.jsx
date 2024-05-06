import Starships from '../pages/Starships/Starships'
import StarshipPage from '../pages/StarshipPage/StarshipPage'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <main>
    </main>
    <Routes>
      <Route path='/' element={<Starships/>} />
      <Route path='/:idx' element={<StarshipPage/>} />
    </Routes>
    </>
  )
}

export default App
