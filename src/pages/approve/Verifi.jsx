import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Verifi = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract the userId from the query parameters
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');
    const handleApproveuser = async () => {
        console.log('handleApproveuser');
        try {
            console.log('userId:', userId);
            const response = await axios.put(`http://localhost:3000/mail/verfieduser/${userId}`);
            console.log('User approved:', response.data);
        } catch (error) {
            console.log('Error approving user:', error);
        }
    };

    useEffect(() => {
        handleApproveuser();
    }, [userId]); // Trigger effect when userId changes

    return (
        <div>
            <h1>Verification Page</h1>
            <button className="btn btn-primary" onClick={() => navigate('/App')}>
                Back to Home
            </button>
        </div>
    );
}

export default Verifi;
