import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";


const PublicValidationFragment = <Navigate replace to={PublicRoutes.LOGIN} />;
const PrivateValidationFragment = <Navigate replace to={PrivateRoutes.ADMIN_DASHBOARD} />;

export const AuthGuard = () => {
    return localStorage.getItem('token') ? PrivateValidationFragment : PublicValidationFragment;
};

export default AuthGuard;