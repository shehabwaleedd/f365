// Code to update user data

import axios from "axios";
import { useUser } from "./useUser";


const UserUpdate = async (userData) => {

    const { user } = useUser();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
        try {
            const response = await axios.put(`https://events-nsih.onrender.com/user/${userId}`, userData, {
                headers: { token },
            });
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
        }
    }
}

export default UserUpdate;

export const updateUserAvatar = async (userId, formData) => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    const baseUrl = "https://events-nsih.onrender.com/user";
    try {
        const response = await axios.patch(`${baseUrl}`, formData, {
            headers: {
                Authorization: {token},
                'Content-Type': 'multipart/form-data', // Important for file uploads
            },
        });

        console.log("Avatar updated:", response.data);
        // Optionally, update local user data or state to reflect the new avatar
        return response.data;
    } catch (error) {
        console.error("Error updating avatar:", error);
        throw error; // Re-throw the error for further handling
    }
};


export const fetchUserEvents = async (userId) => {
    const token = localStorage.getItem('token');
    const baseUrl = "https://events-nsih.onrender.com/user";
    try {
        const response = await axios.get(`${baseUrl}/${userId}/events`, {
            headers: { token },
        });

        console.log("User events:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching user events:", error);
        throw error;
    }
}



