import { createReducer } from "@reduxjs/toolkit";

export const UserReudcer = createReducer({},{

    // Login Request 

    loginRequest : (state) => {
        state.loading = true;
    },

    loginSuccess : (state,action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },

    loginFail : (state,action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload.error;
    },

    clearError : (state) => {
        state.error = null;
    },

    clearMessage : (state) => {
        state.message = null;
    },


    // Signup Form 

    SignupUserRequest : (state) => {
        state.loading = true;
    },
    SignUserSuccess : (state,action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    SignUserFail : (state,action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },


    // load User Request or /me 

    loadUserRequest : (state) => {
        state.loading = true;
    },
    loadUserSuccess : (state,action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loadUserFail : (state,action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    

    // Logout Functions 

    logoutUserRequest : (state) => {
        state.loading = true;
    },
    logoutUserSuccess : (state,action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    logoutUserFail : (state,action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload; 
    },
})