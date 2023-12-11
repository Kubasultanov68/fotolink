import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import axios from "../../utils/axios";

 export const create = createAsyncThunk('POST/CREATE', async (postData, thunkAPI) => {
    try {

        const {data} = await axios.post('/posts', postData)
        return data

    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue(e)
    }
})

export const all = createAsyncThunk('POST/ALL', async (_, thunkAPI) => {
    try {

        const {data} = await axios.get('/posts')
        return data

    } catch (e) {
        console.log(e)
        return thunkAPI.rejectWithValue(e)
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState: {
        create: {
            isLoading: false,
        },
        all: {
            isLoading: false,
            posts: []
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(create.pending, (state, {payload}) => {
                state.create.isLoading = true
            })
            .addCase(create.fulfilled, (state, {payload}) => {
                state.create.isLoading = false
                toast.success(payload.message)
            })
            .addCase(create.rejected, (state, {payload}) => {
                state.create.isLoading = false
                toast.error('Ошибка')

            })

            .addCase(all.pending, (state, {payload}) => {
                state.all.isLoading = true
            })
            .addCase(all.fulfilled, (state, {payload}) => {
                state.all.isLoading = false
                state.all.posts = payload.posts
            })
            .addCase(all.rejected, (state, {payload}) => {
                state.all.isLoading = false
                toast.error('Ошибка')

            })
    }
})

export default postSlice.reducer
export const {} = postSlice.actions