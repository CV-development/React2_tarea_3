import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { PokeContext } from '../context/PokeContext'

const Pokemon = () => {
  const { pokeData } = useContext(PokeContext)
  const [pokemonId, setPokemonId] = useState('')
  const navigate = useNavigate()

  const handleSelectChange = (e) => {
    setPokemonId(e.target.value)
  }

  const irAPkmn = () => {
    const selectedPokemon = pokeData.find(pkmn => pkmn.name === pokemonId)
    if (selectedPokemon) {
      const pokemonUrl = selectedPokemon.url
      const pokemonId = pokemonUrl.split('/').slice(-2, -1)[0] // Extrae la ID del Pokémon de la URL
      navigate(`/pokemon/${pokemonId}`) // Redirige a la URL con la ID del Pokémon
    }
  }
  return (
    <>
      <h1 className='d-flex align-items-center justify-content-center'>Selecciona un Pokémon</h1>
      <div className='d-flex align-items-center justify-content-center'>
        <Form.Select aria-label='Selecciona un Pokemon' className='me-3' style={{ width: '200px' }} onChange={handleSelectChange}>
          <option>Escoge un Pokémon</option>
          {pokeData.map((pkmn, index) => (
            <option key={index} value={pkmn.id}>{pkmn.name}</option>
          ))}
        </Form.Select>
        <Button variant='primary' onClick={irAPkmn}>Go!</Button>{' '}
      </div>
    </>
  )
}

export default Pokemon
