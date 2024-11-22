export const API_URL = 'https://89nnm345-4000.use2.devtunnels.ms';

export const PublicRoutes = {

    APPLY: 'apply/:jobId',
    APPLY_DOCUMENTS: 'apply/documents/:enrolledId',
    LOGIN: 'login',
    LANDING: '',
    JOBS: 'jobs',
    ABOUT_US: 'aboutUs',
    COLABORADOR: 'colaborador',
    SUCCES_APPLICATION: 'success'
};

export const PrivateRoutes = {
    ADMIN_DASHBOARD: 'admin/dashboard',
    ADMIN_POSTULACIONES: 'admin/postulaciones',
    ADMIN_PERSONAL: 'admin/personal',
    ADMIN_USER: 'admin/user/:identification_document',
};