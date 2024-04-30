import { createContext, useEffect, useState } from 'react'

export const PokeContext = createContext()

const PokeProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([])
  const getData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()
      setPokeData(data.results)
    } catch (error) {
      console.error('error consiguiendo la data', error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <PokeContext.Provider value={{ pokeData, setPokeData }}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider
