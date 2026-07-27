import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            email: "",
            password: "",
        }
    },
    reducers: {
        singUp: (state, action) => {
            user.state = action.payload

        },

        singIn: (state, action) => {

        }
    }
});

export default authSlice.reducer;

export const { singUp } = authSlice.reducer;
