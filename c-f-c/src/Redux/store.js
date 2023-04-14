
import { configureStore } from '@reduxjs/toolkit';
import { UserReudcer } from './reducers/userRducer';

const  store = configureStore({
    reducer: {
        user : UserReudcer,
    },
})

export default store;

export const server = 'https://cc-ff-cc.onrender.com/api/v1'