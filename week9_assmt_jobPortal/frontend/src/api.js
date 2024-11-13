//  frontend/src/api.js
import axios from 'axios'

export const loginUser = async(username, password)=>{
    try{
        const response = await axios.post('http://localhost:3100/auth/login', {username,password})
        return response.data
    }catch(error){
        return {success:false, message:"Error in login request."}
    }

}

axios.interceptors.request.use(

    (config)=>{
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },

    (error) => Promise.reject(error)
)

export const registerUser = async(email, fullName, password)=>{
    try{
        const response = await axios.post('http://localhost:3100/users/create', {email,fullName, password})
        console.log(response.data)
        return response.data
    }catch(error){
        console.log(error)
    }
}