import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, RouteProps, useNavigate } from 'react-router-dom';
import { refresh } from 'shared/api/Authorization/UserActions';
import { UserSlice } from 'shared/api/Authorization/UserSlice';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PrivateRoute.module.scss';


interface PrivateRouteProps {
}

export const PrivateRoute: React.FC<PrivateRouteProps> = () => {


    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    const dispatch = useAppDispatch()
    const userSelector = useAppSelector(state => state.UserReduser) 

    useEffect(
        ()=>console.log('123'), []
    )

    return (
        userSelector.auth ? <Outlet /> : <Navigate to="/admin/login" />
    )
}