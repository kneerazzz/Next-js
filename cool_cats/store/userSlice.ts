import { createSlice } from "@reduxjs/toolkit";


interface storeProps{
    user: string;
    isLoggedIn: boolean;
    name: string;
}

const initialState = {
    userData: null,
    status: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;

        },
        logout: (state , action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const {logout, login} = userSlice.actions;

export default userSlice.reducer;