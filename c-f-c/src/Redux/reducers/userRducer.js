import { createReducer } from "@reduxjs/toolkit";

export const UserReudcer = createReducer({},{

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


    loadUserRequest : (state) => {
        state.loading = true;
    },
    loadUserSuccess : (state,action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.message = action.payload;
    },
    loadUserFail : (state,action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },
})