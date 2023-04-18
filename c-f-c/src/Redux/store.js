
import { configureStore } from '@reduxjs/toolkit';
import { UserReudcer } from './reducers/userRducer';

const  store = configureStore({
    reducer: {
        user : UserReudcer,
    },
})

export default store;

export const server = 'https://course-for-coders-web-app-production.up.railway.app'