// frontend/src/App.js
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import Home from './components/Home'
import About from './components/About'
import JobListings from './components/JobListings'
import Contact from './components/Contact'
import CompanyShowcase from './components/CompanyShowcase'
import Login from './components/Login'
import { Logout } from './components/Logout'
import Register from './components/Register'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(
    ()=>{
      // chech if token is stored
      const token = localStorage.getItem('token')
      setIsAuthenticated(!!token)
    },
    []
  )
  
  return (
    <>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Job Portal
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
            <Button color="inherit" component={Link} to="/companies">Companies</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>

            {isAuthenticated ? (
              <Button color="inherit" onClick={() => { Logout(); setIsAuthenticated(false); }}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/login">Login</Button>
            )}
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/companies" element={<CompanyShowcase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
