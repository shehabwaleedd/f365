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