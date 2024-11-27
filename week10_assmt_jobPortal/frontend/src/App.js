// frontend/src/App.js
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import Home from './components/Home'
import About from './components/About'
import JobListings from './components/JobListings'
import Contact from './components/Contact'
import CompanyShowcase from './components/CompanyShowcase'

import Login from './components/Login'
import { Logout } from './components/Logout'
import Register from './components/Register'

import ProtectedRoute from "./components/ProtectedRoute";

import EmployeesPage from "./components/Employees";
import AddJob from "./components/Job/AddJob";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

  useEffect(
    () => {
        // chech if token is stored
        const token = localStorage.getItem('token')
        setIsAuthenticated(!!token)

        const userType = localStorage.getItem("userType");
        setIsAdmin(userType === 'admin');
    },
    []
  )
  // active link style
  const activeStyle = { backgroundColor: 'white', color:"#333", fontWeight: 'bold' }
  const defaultStyle = { color: '#fff', fontWeight: 'bold' }

  return (
    <Router>
      <AppBar position="static" style={{width: "100%"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Portal
          </Typography>
            {isAuthenticated ? (
                <>
                    {isAdmin ? (
                        <>
                            <NavLink to="/admin/employees" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Employees</Button>
                            </NavLink>
                            <NavLink to="/admin/addjob" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Add Job</Button>
                            </NavLink>
                        </>
                    ) :(
                        <>
                            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink to="/jobs" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Jobs</Button>
                            </NavLink>
                            <NavLink to="/companies" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Companies</Button>
                            </NavLink>
                            <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">About</Button>
                            </NavLink>
                            <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                                <Button color="inherit">Contact</Button>
                            </NavLink>
                        </>
                    )}

                    <Button color="inherit" onClick={() => { Logout(); setIsAuthenticated(false); }}>
                      Logout
                    </Button>
                </>
          ) : (
              <>
                <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                  <Button color="inherit">Login</Button>
                </NavLink>

                <NavLink to="/register" style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>
                  <Button color="inherit">Register</Button>
                </NavLink>
              </>
          )}

        </Toolbar>
      </AppBar>

      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<ProtectedRoute allowedTypes={["employee"]}><Home /></ProtectedRoute>}  />
          <Route path="/about" element={<ProtectedRoute allowedTypes={["employee"]}><About /></ProtectedRoute>} />
          <Route path="/jobs" element={<ProtectedRoute allowedTypes={["employee"]}><JobListings /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute allowedTypes={["employee"]}><Contact /></ProtectedRoute>} />
          <Route path="/companies" element={<ProtectedRoute allowedTypes={["employee"]}><CompanyShowcase /></ProtectedRoute>} />

          <Route path="/admin/employees" element={<ProtectedRoute allowedTypes={["admin"]}><EmployeesPage /></ProtectedRoute>}/>
          <Route path="/admin/addjob" element={<ProtectedRoute allowedTypes={["admin"]}><AddJob /></ProtectedRoute>}/>

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
