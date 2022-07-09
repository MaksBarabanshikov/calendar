import {IUser} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalendarState {
    user: IUser | null
    loading: boolean
    error: string
}

const initialState: CalendarState = {
    user: null,
    loading: false,
    error: ''
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        fetchLoading: (state, action: PayloadAction) => {
            state.loading = true
        },
        fetchSuccess: (state, action: PayloadAction<IUser>) => {
            state.loading = false
            state.user = action.payload
        },
        fetchError: (state, action: PayloadAction<Error>) => {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export default calendarSlice.reducer