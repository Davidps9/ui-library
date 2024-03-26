import SSwitch from '../switchButton/SSwitch'
import './App.css'
import Sbutton from './button/Sbutton'

function App() {


  return (
    <>
      <Sbutton text='Click me' variant='text' size='small' uppercase />
      <Sbutton text='Click me' variant='contained' size='medium' uppercase />
      <Sbutton text='Click me' fontColor='red' rounded size='large' variant='outlined' borderColor='blue' uppercase />
      <Sbutton text='Click me' variant='outlined' borderColor='red' uppercase />
      <Sbutton text='You can not click me' variant='outlined' disabled uppercase />
      <SSwitch size='large' color='red' checked />
      <SSwitch size='medium' color='blue' checked />
      <SSwitch size='small' color='amber' checked />
    </>
  )
}

export default App
