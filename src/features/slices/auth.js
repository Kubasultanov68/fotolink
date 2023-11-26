import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: null,
    isLoading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        checkAuth: (state) => {
            Boolean(state.user)
        },
        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: () => {}
})

export default authSlice.reducer
export const {
    checkAuth,
    logout
} =  authSlice.actions

