import { useState } from 'react';

const useApi = (baseUrl, endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const callApi = async (formData) => {
        setLoading(true);
        const url = `${baseUrl}/${endpoint}?${new URLSearchParams(formData).toString()}`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP status ${response.status}`);
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, callApi };
};

export default useApi;
