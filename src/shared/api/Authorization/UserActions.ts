import axios  from 'axios';
import { AppDispatch } from "app/store/store"
import { baseUrlAuth } from "shared/config/ApiConfig/ApiConfig"
import { IToken, IUser } from './types';
import { UserSlice } from './UserSlice';

export const login = (data: FormData) => async (dispatch: AppDispatch) =>  {
    try {
        const url = `${baseUrlAuth}token/`
        const response = await axios.post<IToken>(url, data)
        dispatch(UserSlice.actions.setAccess(response.data.access))
        dispatch(UserSlice.actions.setRefresh(response.data.refresh))
        dispatch(UserSlice.actions.setAuth())
    } catch (e) {
        console.log(e)
    }
}

export const refresh = () => async (dispatch: AppDispatch) =>  {
    try {
        const url = `${baseUrlAuth}/token/refresh/`
        const formData = new FormData()
        formData.append('refresh', localStorage.getItem('refresh'))
        const response = await axios.post(url, formData)
        dispatch(UserSlice.actions.setAccess(response.data.access))
        dispatch(UserSlice.actions.setAuth())
    } catch (e) {
        console.log(e)
    }
}