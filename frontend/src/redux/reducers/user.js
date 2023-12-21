import { createReducer } from "@reduxjs/toolkit";
import { createAction } from '@reduxjs/toolkit';

const LoadUserRequest = createAction('LoadUserRequest');
const LoadUserSuccess = createAction('LoadUserSuccess');
const LoadUserFail = createAction('LoadUserFail');
const clearMessase = createAction('clearMessase');
const clearError = createAction('clearError');


const initialState={
    isAuthenticated:false,
};

export const userReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(LoadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(LoadUserSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(LoadUserFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    .addCase(clearMessase, (state) => {
      state.successMessage = null;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    });
    // LoadUserRequest:(state)=>{
    //     state.loading=true;
    // },
    // LoadUserSuccess:(state,action)=>{
    //     state.isAuthenticated=true;
    //     state.loading=false;
    //     state.user=action.payload;
    // },
    // LoadUserFail:(state,action)=>{
    //     state.loading=false;
    //     state.error=action.payload;
    //     state.isAuthenticated=false;
    // },


    // clearMessase:(state)=>{
    //     state.successMessage=null;
    // },
    // clearError:(state)=>{
    //     state.error=null;
    // }

})