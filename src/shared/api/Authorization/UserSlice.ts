import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, IUser } from './types';


const initialState: UserState = {
    user: {
        username: '',
        password: ''
    },
    token: {
        access: '',
        refresh: ''
    },
    access_is_expired: false,
    auth: false
}


export const UserSlice = createSlice({
    initialState: initialState,
    name: 'user',
    reducers: {

        setUser(state, action: PayloadAction<IUser>){
            state.user = action.payload
        },
        setAccess(state, action: PayloadAction<string>){
            state.token.access = action.payload
            state.access_is_expired = false
            localStorage.setItem('access', `Bearer ${action.payload}`)
        },
        setRefresh(state, action: PayloadAction<string>){
            state.token.refresh = action.payload
            localStorage.setItem('refresh', action.payload)
        },
        setAuth(state){
            state.auth = true
        },
        setUnAuth(state){
            state.auth = false
        }

    }
})


export default UserSlice.reducer;