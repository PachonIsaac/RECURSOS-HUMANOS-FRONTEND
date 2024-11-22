import './app.css'
import { BrowserRouter, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { Landing } from './views/landing'
import { LandingLayout } from './components/landingLayout/landingLayout'
import { DashboardLayout } from './components/dashboardLayout/dashboardLayout'
import Login from './views/loginForm'
import Jobs from './views/jobs'
import AboutUs from './views/aboutUs'
import Dashboard from './views/dashboard'
import JobApplicationForm from './views/jobApplicationForm'
import UserDetails from './views/userDetails'
import DashboardPostulaciones from './views/dashboardPostulaciones'
import DashboardPersonal from './views/dashboardPersonal'
import Colaborador from './views/colaborador'
import ApplyDocument from './Views/applyDocument'
import AuthGuard from './guards/auth.guard'

import {RoutesWithNotFound} from './Utilities'
import {PublicRoutes, PrivateRoutes} from './models'

export function App(){
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <BrowserRouter>
          <RoutesWithNotFound>

          <Route element={<LandingLayout />}>
              <Route path={PublicRoutes.LANDING} element={<Landing />} />
              <Route path={PublicRoutes.JOBS} element={<Jobs />} />
              <Route path={PublicRoutes.APPLY} element={<JobApplicationForm />} />
              <Route path={PublicRoutes.APPLY_DOCUMENTS} element={<ApplyDocument />} />
              <Route path={PublicRoutes.ABOUT_US} element={<AboutUs />} />
            </Route>
            {/* <Route element={<AuthGuard />}> */}
              <Route element={<DashboardLayout />}>
                <Route path={PrivateRoutes.ADMIN_DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.ADMIN_POSTULACIONES} element={<DashboardPostulaciones />} />
                <Route path={PrivateRoutes.ADMIN_PERSONAL} element={<DashboardPersonal />} />
                <Route path={PrivateRoutes.ADMIN_USER} element={<UserDetails />} />
              
                <Route path={PublicRoutes.COLABORADOR} element={<Colaborador />} />
              </Route>
            {/* </Route> */}
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
          </RoutesWithNotFound>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App;
