import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import {toast} from "react-toastify";


export const register = createAsyncThunk('AUTH/REGISTER', async (userData, thunkAPI) => {
    try {

        const {data} = await axios.post('/auth/register', userData)
        return data

    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue(e)
    }
})

export const login = createAsyncThunk('AUTH/LOGIN', async (userData, thunkAPI) => {
    try {

        const {data} = await axios.post('/auth/login', userData)
        return data

    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue(e)
    }
})

export const me = createAsyncThunk('AUTH/ME', async ({token}, thunkAPI) => {
    try {

        const {data} = await axios.post('/auth/me', {token})
        return data

    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue(e)
    }
})


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
            toast('Вы вышли из аккаунта!')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, {payload}) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
                toast.success(payload.message)
            })
            .addCase(register.rejected, (state, {payload}) => {
                state.isLoading = false
            })

            .addCase(login.pending, (state, {payload}) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.isLoading = false
                state.user = payload.user
                toast.success(payload.message)
            })
            .addCase(login.rejected, (state, {payload}) => {
                state.isLoading = false
            })

            .addCase(me.fulfilled, (state, {payload}) => {
                state.user = payload.user
            })
    }
})

export default authSlice.reducer
export const {
    checkAuth,
    logout
} =  authSlice.actions

