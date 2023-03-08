import { userApi } from 'shared/api/Authorization/UserApi';
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { doctorsApi } from "shared/api/Doctors/DoctrosApi";
import DoctorsReduser from 'shared/api/Doctors/DoctorsSlice'
import UserReduser from 'shared/api/Authorization/UserSlice'


const rootReducer = combineReducers({
    [doctorsApi.reducerPath]: doctorsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    DoctorsReduser,
    UserReduser
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware()
                .concat(doctorsApi.middleware)
                .concat(userApi.middleware)
    })
}  

export type RootState = ReturnType<typeof rootReducer>  
export type AppStore = ReturnType<typeof setupStore>  
export type AppDispatch = AppStore['dispatch']  