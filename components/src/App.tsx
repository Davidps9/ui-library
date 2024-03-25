import './App.css'
import Sbutton from './components/Sbutton'

function App() {

  return (
    <>
      <Sbutton text='Click me' variant='text' uppercase />
      <Sbutton text='Click me' variant='contained' uppercase />
      <Sbutton text='Click me' fontColor='blue' variant='outlined' borderColor='blue' uppercase />
      <Sbutton text='Click me' variant='outlined' borderColor='red' uppercase />
      <Sbutton text='Click me' variant='outlined' disabled uppercase />

    </>
  )
}

export default App
