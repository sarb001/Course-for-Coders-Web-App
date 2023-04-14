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
        dispatch({ type: 'loginFail'    ,  payload :error.respone.data.message});
    }
}