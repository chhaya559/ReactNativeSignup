import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//type of data
type User = {
    email : string;
}
export type AuthState = {
    user: User | null,
    token: string | null,
    isAuthenticated: boolean
}
//initialize data
const initialState :AuthState =  {
    user : null,
    token  : "", 
    isAuthenticated : false
}

export const AuthSlice = createSlice({
    name : "Auth",
    initialState,
    reducers:{
        login :(state, action: PayloadAction<{user:User, token: string}>)=> {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;

        },
        logout:(state)=> {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        }
    },
})
export const {login, logout} = AuthSlice.actions;
export default AuthSlice;