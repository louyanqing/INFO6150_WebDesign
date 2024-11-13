import React, { useState } from 'react'
import { registerUser } from '../../api'
import './register.css'

const Register = () => {

    const [formData, setFormData] = useState({
        email:'',
        fullName:'',
        password:''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // handle form data change
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    // form validation login
    const validateForm = ()=>{
        if(!formData.email || !formData.fullName || !formData.password){
            setError('All fields are required')
            return false
        }
        if(formData.password.length<8){
            setError('Password must be at least 8 characters long')
            return false
        }
        setError('')
        return true
    }
    // Handle form submission
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!validateForm()) return;

        try{
            const response = await registerUser(formData.email, formData.fullName, formData.password)
            setSuccess(response.message)
            setFormData({email:'', fullName:'', password:''})
        }catch(err){
            setError(err.response?.data?.message||'Registration failed. Please try again.')
        }
    }
    
    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register