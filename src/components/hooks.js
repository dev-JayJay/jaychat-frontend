import React,{ useState, useCallback } from 'react';


const CustomHooks = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const SendRequest = useCallback(async ({ endpoint, method = 'GET', body = null, headers = {} }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080${endpoint}`,{
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: body ? JSON.stringify(body) : null,
            }); 
            
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = response.json();
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