import { createSlice } from '@reduxjs/toolkit';
import { DoctorState, IDoctor } from 'shared/api/Doctors/types';



const initialState: DoctorState = {
    error: '',
    isLoading: false,
    doctors: []
}

export const DoctorsSlice = createSlice({
    initialState: initialState,
    name: 'doctors',
    reducers: {
         
    }
})



export default DoctorsSlice.reducer;