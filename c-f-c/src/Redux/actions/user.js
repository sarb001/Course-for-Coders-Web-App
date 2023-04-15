import { server } from "../store";
import  axios from 'axios';

export const login = (email,password) =>  async(dispatch)   => {
    try{
        dispatch({ type: 'loginRequest' });
        const { data } = await axios.post(`${server}/login`, {email,password },
        {
            headers : {
                'Content-Type': 'application/json',
            },
            withCredentials : true,
        })
        dispatch({ type: 'loginSuccess'  , payload : data });

        console.log('data is ',{data});

    }catch(error){
        dispatch({ type: 'loginFail'  ,  payload :error.respone.data.message});
    }
}

export const loadUser = () =>  async dispatch  => {
    try{
        dispatch({ type: 'loadUserRequest' });

        const { data } = await axios.get(`${server}/me`,
         {
            withCredentials : true,
         }
        );
        console.log('data get Profile-- ',{data});
        dispatch({ type: 'loadUserSuccess'  , payload : data.user });
    }catch(error){

        dispatch({ type: 'loadUserFail' , payload :error.response.data.message});
    }
}

export const logout = () =>  async dispatch   => {
    try{
        dispatch({ type: 'logoutUserRequest' });
        const { data } = await axios.get(`${server}/logout`,
         {
            withCredentials : true,
         }
        );
        console.log('data get Profile-- ',{data});
        dispatch({ type: 'logoutUserSuccess'  , payload : data.message });
    }catch(error){
        dispatch({ type: 'logoutUserFail' , payload :error.response.data.message});
    }
}

export const register = formdata =>  async dispatch   => {
    try{

        dispatch({ type: 'SignupUserRequest' });
        
        const { data } = await axios.post(`${server}/register` , formdata,
        {
             headers: {
                 'Content-type' : 'multipart/form-data',
             },
            withCredentials : true,
            allowCredentials : true
        },
        );
        console.log('data Signup iss - ',data);
        dispatch({ type: 'SignUserSuccess'  , payload : data });
    }catch(error){
        dispatch({ type: 'SignUserFail' , payload :error.response.data.message});
    }
}