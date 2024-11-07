import './App.css'
import { Route, Routes} from 'react-router-dom'
import { Landing } from './Views/Landing'
import { Layout } from './Components/Layout/Layout'
import Login from './Views/Login'
import Dashboard from './Views/Dashboard'


export function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Landing />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}