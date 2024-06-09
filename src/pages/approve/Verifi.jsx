import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Verifi = ({userId}) => {
    const navigate = useNavigate();

    const handleApproveuser = async () => {
        console.log('handleApproveStudent');
        try {
            console.log('userId:', userId);
            const response = await axios.put(`http://localhost:3000/mail/verfieduser/${userId}`);
            console.log('Student approved:', response.data);
        } catch (error) {
            console.log('Error approving student:', error);
        }
    };

    useEffect(() => {
        handleApproveuser();
    }, []);

    return (
        <div>
            <h1></h1>
            <button className="btn btn-primary" onClick={() => navigate('/App')}>
                Back to Home
            </button>
        </div>
    );
}

  
  

export default Verifi;
