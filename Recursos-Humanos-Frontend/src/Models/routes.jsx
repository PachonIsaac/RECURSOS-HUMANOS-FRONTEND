export const API_URL = 'https://ssnbt34f-3000.brs.devtunnels.ms/api';

export const PublicRoutes = {

    APPLY: 'apply/:jobId',
    LOGIN: 'login',
    LANDING: 'landing',
    JOBS: 'jobs',
    ABOUT_US: 'aboutUs',


    DASHBOARD: 'dashboard',
    DASHBOARD_POSTULACIONES: 'dashboard/postulaciones',
    DASHBOARD_PERSONAL: 'dashboard/personal',
    DASHBOARD_USER: 'dashboard/user/:id',
    COLABORADOR: 'colaborador'

};

export const PrivateRoutes = {
    DASHBOARD_ADMIN: 'dashboard'
};