import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions/userActions";

import { loginUser } from '../../api'
import { TextField, Button, Typography, Box } from '@mui/material'
import './login.css'

function Login() {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    // login
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            if (!username || !password) {
                setMessage('Please enter username and password')
                return
            }
            const response = await loginUser(username, password)

            if (response.success) {
                const user = response.user
                // store JWT token in localStorage
                localStorage.setItem("token", response.token);
                localStorage.setItem("userType", user.type);

                dispatch(setUser(user.type)) // Save user type in Redux

                if(user.type === 'admin'){
                    window.location.href = '/admin/employees'
                }else{
                    window.location.href = '/'
                }
            } else {
                setMessage('Login failed: ' + response.message)
            }
        } catch (error) {
            setMessage('Login error:', error)
        }
    }

    return (
        <div className="login-container">
            <Box component="form" display="flex" flexDirection="column" alignItems="center" mt={4}>
                <Typography  variant="h5" gutterBottom>Login</Typography>
                <Typography variant="body1" color="error" mt={2}>{message}</Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={handleLogin} 
                >
                    Login
                </Button>
                <Typography variant="body1" mt={2}>
                    Don't have an account? <a href="/register">Register</a>
                </Typography>

            </Box>
        </div>
    )
}

export default Login