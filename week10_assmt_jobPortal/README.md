# React Project Job Portal with Material UI and Axios

## Project overview
This project is a Job Portal built using React, Material UI (optional), and Axios. It aims to provide a user-friendly interface for job seekers to explore job listings and company profiles. The portal includes five key pages: Home, Job Listings, Companies, Contact, and Login. 

## Objective
- **Login Page**: Create a login page where users can authenticate using predefined emails and passwords from a previous assignment(Express_RESTfulAPI) (no need to create a signup page).
- **Job Listings**: Dynamically display job postings on the "Job Listings" page, with job roles, descriptions, and salary. The data is fetched from the jobPosts object provided. 
- **Company Showcase**: Display company profiles with images sourced from a backend server.
- **Session Management**: Implement login and logout functionality to manage user sessions.

## Project Setup
1. Set Up the Frontend: 
    `cd frontend`
    `npm install`
2. Start the Frontend App:  
    `npm start`
3. Set Up the Backend:
    `cd backend`
    `npm install` 
4. Start the Backend Server:
    `node --watch server.js`

## Structure
<pre>
week10_assmt_jobPortal               
├─ backend                          
│  ├─ controllers                   
│  │  ├─ authController.js          # Handles authentication-related logic
│  │  └─ userController.js          # Handles user-related logic
│  ├─ images                        
│  │  ├─ amazon.png                # Company logos or images (example)
│  │  ├─ meta.png                  
│  │  └─ ...                       
│  ├─ models                        
│  │  ├─ companyModel.js           # Defines the structure of company data
│  │  └─ userModel.js              # Defines the structure of user data
│  ├─ routes                        
│  │  ├─ authRoutes.js             # Defines routes for authentication
│  │  ├─ companyRoutes.js          # Defines routes for accessing company data
│  │  └─ userRoutes.js             # Defines routes for accessing user data
│  ├─ services                      
│  │  └─ authService.js            # Handles the logic for authentication
│  ├─ package-lock.json            # Defines the exact versions of installed dependencies
│  ├─ package.json                 # Manages project dependencies and scripts
│  └─ server.js                    # Entry point for the backend server
├─ frontend                         
│  ├─ public                        
│  │  └─ index.html                # Main HTML file for the frontend
│  ├─ src                           
│  │  ├─ components                 
│  │  │  ├─ About                   
│  │  │  │  └─ index.js            # About page component
│  │  │  ├─ CompanyShowcase         
│  │  │  │  ├─ companyShowcase.css # Styles for the company showcase page
│  │  │  │  └─ index.js            # Company showcase component
│  │  │  ├─ Contact                 
│  │  │  │  ├─ contact.css         # Styles for the contact page
│  │  │  │  └─ index.js            # Contact page component
│  │  │  ├─ Home                    
│  │  │  │  └─ index.js            # Home page component
│  │  │  ├─ JobListings             
│  │  │  │  ├─ index.js            # Job listings component
│  │  │  │  └─ jobListings.css     # Styles for the job listings page
│  │  │  ├─ Login                   
│  │  │  │  ├─ index.js            # Login page component
│  │  │  │  └─ login.css           # Styles for the login page
│  │  │  ├─ Logout                  
│  │  │  │  └─ index.js            # Logout page component
│  │  │  └─ Register                
│  │  │     ├─ index.js            # Register page component
│  │  │     └─ register.css        # Styles for the registration page
│  │  ├─ App.js                     # Main React component that renders all pages
│  │  ├─ api.js                     # Contains the API calls (using Axios)
│  │  ├─ index.js                   # Entry point for the frontend app
│  │  └─ jobPosts.js                # Contains static data for job listings
│  ├─ package-lock.json             # Defines the exact versions of installed dependencies
│  └─ package.json                  # Manages project dependencies and scripts
└─ README.md                        # Documentation file for the project
  </pre>                     

## Navigation
The Job Portal app uses React Router for navigation, allowing users to easily switch between different pages of the application. The app's main navigation is provided by a top navigation bar (using Material UI's AppBar), which contains links to the following pages:

### Pages & Routes:
1. Home (/)
The main landing page of the job portal.

2. Job Listings (/jobs)
Displays a list of available job postings for job seekers.

3. Companies (/companies)
Showcases company profiles and details for job seekers to explore.

4. About (/about)
Provides information about the job portal, its purpose.

5. Contact (/contact)
A contact page where users can reach out for support or inquiries.

6. Login (/login)
A login page where users can authenticate to access job listings and other features.


