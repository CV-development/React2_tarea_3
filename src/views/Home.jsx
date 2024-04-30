import Image from 'react-bootstrap/Image'
import pikachuImg from '../assets/pikachu.png'

const Home = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h1>Bienvenido maestro Pokémon</h1>
      <Image src={pikachuImg} alt='Pikachu' width='300' height='300' />
    </div>
  )
}

export default Home
