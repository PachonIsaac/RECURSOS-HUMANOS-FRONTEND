import './App.css'
import { BrowserRouter, Route} from 'react-router-dom'
import { Landing } from './Views/Landing'
import { Layout } from './Components/Layout/Layout'
import Login from './Views/Login'
import Dashboard from './Views/Dashboard'
import {RoutesWithNotFound} from './Utilities'
import {PublicRoutes, PrivateRoutes} from './Models'

export function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path='/' element={<Layout />}>
            <Route path={PublicRoutes.LANDING} element={<Landing />} />
          </Route>

          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </RoutesWithNotFound>

      </BrowserRouter>

    </div>
  )

}


export default App;
