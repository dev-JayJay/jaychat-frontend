import React,{ useState, useCallback } from 'react';


const CustomHooks = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const SendRequest = useCallback(async ({ endpoint, method = 'GET', body = null, headers = {} }) => {
        setLoading(true);
        setError(null);

        // Get the token from localStorage
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`http://localhost:8080${endpoint}`,{
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    ...headers
                },
                body: body ? JSON.stringify(body) : null,
            }); 
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            // Save the token in localStorage
            localStorage.setItem('token', result.token);
            // pass data
            setData(result);
            console.log(result);
            
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }

    }, []);

    return { error, data, loading, SendRequest };
}
export default CustomHooks;