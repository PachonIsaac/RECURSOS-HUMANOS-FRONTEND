export const API_URL = 'https://ssnbt34f-3000.brs.devtunnels.ms/api';

export const PublicRoutes = {
    LOGIN: 'Login',
    LANDING: '',
    JOBS: 'Jobs',
    ABOUT_US: 'AboutUs',
    APPLY: 'apply/:jobId',

    DASHBOARD: 'dashboard',
    DASHBOARD_POSTULACIONES: 'dashboard/postulaciones',
    DASHBOARD_PERSONAL: 'dashboard/personal',
    DASHBOARD_USER: 'dashboard/user/:id'
};

export const PrivateRoutes = {
    DASHBOARD_ADMIN: 'dashboard'
};