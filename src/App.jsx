import { Route, Routes } from 'react-router-dom'
import NavbarPkm from './components/Navbar'
import Pokemon from './views/Pokemon'
import Home from './views/Home'
import Pkmn from './views/Pkmn'

const App = () => {
  return (
    <div className='app-container'>
      <NavbarPkm />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/pokemon/'
          element={<Pokemon />}
        />
        <Route
          path='/pokemon/:pokemonId'
          element={<Pkmn />}
        />
      </Routes>
    </div>
  )
}
export default App
