export function Logout(){
    // remove token from localStorage
    localStorage.removeItem('token');
    // redirect the user to the login page or home page
    window.location.href = '/login'
}