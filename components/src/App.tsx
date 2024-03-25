import './App.css'
import SAvatar from './components/SAvatar'
import SSwitch from './components/SSwitch'
import Sbutton from './components/Sbutton'

function App() {

  return (
    <>
      <Sbutton text='Click me' variant='text' uppercase />
      <Sbutton text='Click me' variant='contained' uppercase />
      <Sbutton text='Click me' fontColor='red' rounded variant='outlined' borderColor='blue' uppercase />
      <Sbutton text='Click me' variant='outlined' borderColor='red' uppercase />
      <Sbutton text='You can not click me' variant='outlined' disabled uppercase />
      <SAvatar size='small' src='https://cdn-icons-png.flaticon.com/512/147/147140.png' name='David' />
      <SAvatar size='medium' src='https://cdn-icons-png.flaticon.com/512/147/147140.png' borderColor='red' border name='David' />
      <SAvatar size='large' src='https://cdn-icons-png.flaticon.com/512/147/147140.png' name='David' />
      <SSwitch></SSwitch>
    </>
  )
}

export default App
