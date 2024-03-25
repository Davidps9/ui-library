import './App.css'
import Sbutton from './components/Sbutton'

function App() {

  return (
    <>
      <Sbutton text='hola' variant='text' uppercase />
      <Sbutton text='hola' variant='contained' uppercase />
      <Sbutton text='hola' variant='outlined' borderColor='emerald' uppercase />
      <Sbutton text='hola' variant='outlined' disabled uppercase />

    </>
  )
}

export default App
