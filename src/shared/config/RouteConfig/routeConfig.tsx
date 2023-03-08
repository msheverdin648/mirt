import { DoctorsListPage } from "pages/DoctorsListPage"
import { DoctorFormPage } from "pages/DoctorFormPage/ui/DoctorFormPage"
import { DoctorsPage } from "pages/DoctorsPage"
import { MainPage } from "pages/MainPage"
import { FunctionComponent } from "react"
import { RouteProps } from "react-router-dom"
import { LoginPage } from "pages/LoginPage/ui/LoginPage"




export enum AppRoutes{
    MAIN = 'main',
    DOCTORS = 'doctors',
    DOCTORS_LIST = 'doctors_list',
    DOCTOR_ADD = 'doctor_add',
    DOCTOR_EDIT = 'doctor_edit',
    LOGIN = 'login'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN] : '/',
    [AppRoutes.DOCTORS] : '/doctors',
    [AppRoutes.DOCTORS_LIST] : '/admin/doctors_list',
    [AppRoutes.DOCTOR_ADD] : '/admin/doctor_add',
    [AppRoutes.DOCTOR_EDIT] : '/admin/doctor_edit',
    [AppRoutes.LOGIN] : '/admin/login',
}

interface CustomRouteProps  {
    path: string,
    element: any,
    isAdmin: boolean
}


export const routeConfig: Record<AppRoutes, CustomRouteProps> = {
    //Public Routes
    [AppRoutes.MAIN] : {
        path: RoutePath.main,
        element: <MainPage />,
        isAdmin: false,
    },
    [AppRoutes.DOCTORS]: {
        path: RoutePath.doctors,
        element: <DoctorsPage />,
        isAdmin: false,

    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
        isAdmin: false,
    },

    //Admin Routes
    [AppRoutes.DOCTORS_LIST]: {
        path: RoutePath.doctors_list,
        element: <DoctorsListPage />,
        isAdmin: true,

    },
    [AppRoutes.DOCTOR_ADD]: {
        path: RoutePath.doctor_add,
        element: <DoctorFormPage />,
        isAdmin: true,
    },
    [AppRoutes.DOCTOR_EDIT]: {
        path: RoutePath.doctor_edit,
        element: <DoctorFormPage />,
        isAdmin: true,
    },
   

}