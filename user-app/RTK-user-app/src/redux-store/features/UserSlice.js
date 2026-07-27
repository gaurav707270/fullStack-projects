// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";



// const fetchAllUser = createAsyncThunk("getAllUserData", async (allUserData) => {
//     const res = await axios.get("http://localhost:3000/allUserData")
//     return res.data
// })

// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         allUsers: [],
//         loading = false,
//         error = null
//     },
//     reducers: {
//         // addUser: (state, action) => {
//         //     state.users.push(action.payload)
//         // },

//         // updateUser: (state, action) => {
//         //     const { i, user } = action.payload;
//         //     state.users[i] = user
//         // },

//         // removeUser: (state, action) => {
//         //     state.users.splice(action.payload, 1)

//         // }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchAllUser.pending, (state) => {
//             state.loading = true,
//                 state.error = null
//         });
//         builder.addCase(fetchAllUser.fulfilled, (state, action) => {
//             state.loading = false,
//                 state.error = null,
//                 state.allUsers.push(action.payload)
//         });
//         builder.addCase(fetchAllUser.rejected, (state, action) => {
//             state.loading = false,
//                 state.error = action.error.message
//         })
//     }
// })

// export default userSlice.reducer;
// // export const { addUser, updateUser, removeUser } = userSlice.actions;