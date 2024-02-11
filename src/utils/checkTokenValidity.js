const checkTokenValidity = async (token) => {
    // Example API call to your authentication service
    try {
        const response = await fetch(`${process.env.BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data.isValid;
        }
        return false;
    } catch (error) {
        console.error('Error validating token:', error);
        return false;
    }
};

export default checkTokenValidity;
