import './App.css'
import SAvatar from './avatar/SAvatar'
import SSwitch from './switchButton/SSwitch'
import Sbutton from './button/Sbutton'
import SCard from './card/SCard'

function App() {


  return (
    <>
      <Sbutton text='Click me' variant='text' size='small' uppercase />
      <Sbutton text='Click me' variant='contained' size='medium' uppercase />
      <Sbutton text='Click me' fontColor='red' rounded size='large' variant='outlined' borderColor='blue' uppercase />
      <Sbutton text='Click me' variant='outlined' borderColor='red' uppercase />
      <Sbutton text='You can not click me' variant='outlined' disabled uppercase />
      <SAvatar size='small' src='https://www.w3schools.com/howto/img_avatar.png' name='John Doe' alt='John Doe' uppercase />
      <SSwitch size='large' color='red' checked />
      <SSwitch size='medium' color='blue' checked />
      <SSwitch size='small' color='amber' checked />
      <SCard title='Lizard' subtitle='The green african lizard' textColor='white' limitText={50} text='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' size='small' backgroundColor='green' borderColor='blue' rounded hoverable image='https://mui.com/static/images/cards/contemplative-reptile.jpg' />
      <SCard title='Lizard' subtitle='The green african lizard' text='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' size='medium' backgroundColor='green' borderColor='blue' rounded hoverable image='https://mui.com/static/images/cards/contemplative-reptile.jpg' />
      <SCard title='Lizard' subtitle='The green african lizard' text='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' size='large' backgroundColor='green' borderColor='blue' rounded hoverable image='https://mui.com/static/images/cards/contemplative-reptile.jpg' />
    </>
  )
}

export default App
