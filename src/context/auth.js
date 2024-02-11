export const logout = () => {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('authChange')); // Notify about the auth change
    // Use the router to navigate to the login page
    // No need to navigate here; handle navigation where you call logout
}
