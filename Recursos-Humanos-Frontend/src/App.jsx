import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import { Landing } from './Views/Landing'
import { Layout } from './Components/Layout/Layout'
import Login from './Views/Login'
import Dashboard from './Views/Dashboard'
import Jobs from './Views/Jobs'
import AboutUs from './Views/AboutUs'
import {RoutesWithNotFound} from './Utilities'
import {PublicRoutes, PrivateRoutes} from './Models'

export function App(){
  return (
    <div className='App'>
      <BrowserRouter>
        <RoutesWithNotFound>
        <Route element={<Layout />}>
            <Route path='/' element={<Landing />} />
            <Route path={PublicRoutes.JOBS} element={<Jobs />} />
            <Route path={PublicRoutes.ABOUTUS} element={<AboutUs />} />
          </Route>
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.DASHBOARD} element={<Dashboard />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </div>
  )
}

export default App;
