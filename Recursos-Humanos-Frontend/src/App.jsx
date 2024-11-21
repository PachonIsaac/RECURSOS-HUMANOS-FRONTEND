import './app.css'
import { BrowserRouter, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Landing } from './Views/Landing'
import { LandingLayout } from './Components/LandingLayout/LandingLayout'
import { DashboardLayout } from './Components/DashboardLayout/DashboardLayout'
import Login from './Views/Login'
import Jobs from './Views/Jobs'
import AboutUs from './Views/AboutUs'
import Dashboard from './Views/Dashboard'
import DashboardPostulaciones from './Views/dashboardPostulaciones'
import DashboardPersonal from './Views/dashboardPersonal'
import Colaborador from './Views/Colaborador'
import {RoutesWithNotFound} from './Utilities'
import {PublicRoutes, PrivateRoutes} from './Models'

export function App(){
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route element={<LandingLayout />}>
              <Route path='/' element={<Landing />} />
              <Route path={PublicRoutes.JOBS} element={<Jobs />} />
              <Route path={PublicRoutes.ABOUT_US} element={<AboutUs />} />
            </Route>
            <Route element={<DashboardLayout />}>
              <Route path={PublicRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={PublicRoutes.DASHBOARD_POSTULACIONES} element={<DashboardPostulaciones />} />
              <Route path={PublicRoutes.DASHBOARD_PERSONAL} element={<DashboardPersonal />} />
              <Route path={PublicRoutes.COLABORADOR} element={<Colaborador />} />
            </Route>
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            {/* <Route path={PublicRoutes.DASHBOARD} element={<Dashboard />} /> */}
          </RoutesWithNotFound>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App;
