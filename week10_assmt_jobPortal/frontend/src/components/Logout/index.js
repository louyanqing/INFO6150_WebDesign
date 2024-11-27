export function Logout(){
    // remove token from localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('userType')

    // redirect the user to the login page or home page
    window.location.href = '/'
}