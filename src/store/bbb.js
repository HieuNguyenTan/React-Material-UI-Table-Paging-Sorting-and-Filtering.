import { createSlice } from '@reduxjs/toolkit'
import { api } from '../api/index'
// Slice

const slice = createSlice({
    name: 'hhh',
    initialState: {
        users: []
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        },
        usersSuccess: (state, action) => {
            console.log(action.payload);
            state.users = action.payload;
            state.isLoading = false;
        },
    },
});



const { usersSuccess } = slice.actions

export const fetchUsers = () => async dispatch => {
    try {
        await api.get('/users')
            .then((response) => dispatch(usersSuccess(response.data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}

export default slice.reducer