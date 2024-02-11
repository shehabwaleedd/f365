import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId'); // Retrieve the stored user ID
            if (token && userId) {
                try {
                    setUserLoggedIn(true);
                    const response = await axios.get(`https://events-nsih.onrender.com/user/${userId}`, {
                        headers: { token }, 
                    });
                    console.log(response.data);
                    setUser(response.data);
                } catch (err) {
                    console.error(err);
                    setUserLoggedIn(false); // Set userLoggedIn to false if error occurs
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
                setUserLoggedIn(false); // Ensure userLoggedIn is set to false if no token or userId
            }
        };

        fetchData();
    }, []);

    return { user, loading, userLoggedIn };
};
export const handleLoginSuccess = (token, userData) => {
    localStorage.setItem('token', token); // Store the token
    localStorage.setItem('userId', userData._id); // Store the user ID extracted from userData
    

    window.dispatchEvent(new Event('authChange')); // Notify the application about the authentication status change
};


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // Also remove userId upon logout

    window.dispatchEvent(new Event('authChange'));
    // Since logout changes state that might affect components, consider forcing a re-fetch or state update where needed
};
