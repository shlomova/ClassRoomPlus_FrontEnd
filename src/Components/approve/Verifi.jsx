import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './verifi.css';

const Verifi = ({ userId }) => {
    const navigate = useNavigate();

    const handleApproveUser = async () => {
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
        handleApproveUser();
    }, []);

    return (
        <div className='maincontainer1'>
            <div className='verifi-container'>
                <h2 className='verifi-title'>User Verification</h2>
                {/* anter the verifi code that was given in the email */}
                <input type='text' placeholder='Enter the verification code' className='verifi-input' />
                <button className='verifi-button' onClick={() => navigate('/login')}>
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Verifi;
