// frontend/src/components/About.js
import React from 'react';
import { Container, Typography, Box, Card, Grid, CardContent } from '@mui/material'
import Navbar from "../Navbar";

function About() {
    return (
        <>
            <Navbar/>
        <Container>
            <Box textAlign="center" mt={4}>
                <Typography variant="h2" gutterBottom>About Us</Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                    Welcome to our job portal, where we connect talented job seekers with top companies
                    across various industries. Our mission is to facilitate meaningful connections that
                    empower careers and foster innovation.
                </Typography>
            </Box>

            {/* Mission and Vision Section */}
            <Box mt={6}>
                <Typography variant="h4" align="center" gutterBottom>Our Mission and Vision</Typography>
                <Grid container spacing={4} mt={2}>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Our Mission</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    To create an accessible, user-friendly platform that brings together job seekers
                                    and employers, promoting career growth and facilitating the hiring process.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Our Vision</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    To become the leading job portal known for reliable, efficient, and empowering
                                    career connections across the globe.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Platform Features Section */}
            <Box mt={6}>
                <Typography variant="h4" align="center" gutterBottom>Why Choose Us</Typography>
                <Grid container spacing={4} mt={2}>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Wide Range of Job Listings</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Access a broad spectrum of job opportunities from entry-level to executive roles,
                                    updated daily to ensure you find your perfect fit.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>Trusted Companies</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    We collaborate with top companies, ensuring that every job listing on our platform
                                    meets our quality standards for a trustworthy hiring experience.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>User-Friendly Experience</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Our platform is designed with you in mind, offering an intuitive and seamless
                                    browsing experience so you can focus on your career goals.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
            </>
    )
}

export default About;