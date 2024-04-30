import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Pkmn = () => {
  const { pokemonId } = useParams()
  const [actualPkmn, setActualPkmn] = useState(null)
  const getPkmnData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      const data = await response.json()
      setActualPkmn(data)
    } catch (error) {
      console.error('error consiguiendo la data', error)
    }
  }
  useEffect(() => {
    getPkmnData()
  }, [pokemonId])
  return (
    <div className='d-flex justify-content-center'>
      {actualPkmn && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={actualPkmn.sprites.front_default} />
          <Card.Body>
            <Card.Title> <h2>{actualPkmn.name}</h2></Card.Title>
            <Card.Text>
              Height: {actualPkmn.height} <br />
              Weight: {actualPkmn.weight}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default Pkmn
