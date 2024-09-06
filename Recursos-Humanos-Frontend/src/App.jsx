import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Route, Routes} from 'react-router-dom'
import { Landing } from './Views/Landing'
import { Footer } from  './Components/Footer/Footer'

const Home = () => <h1>Homeeeee</h1>

export function App() {
  return (
    <div className='App'> 
    <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    <Footer />
    </div>
  )
}