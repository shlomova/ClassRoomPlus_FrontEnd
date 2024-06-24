import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './verifi.css';

const Verifi = ({ userId }) => {
    const navigate = useNavigate();
    const [verificationCode, setVerificationCode] = useState('');
    const [showCode, setShowCode] = useState(false);

    const handleApproveUser = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/mail/verfieduser/${userId}`);
            console.log('User approved:', response.data);
        } catch (error) {
            console.log('Error approving user:', error);
        }
    };

    useEffect(() => {
        handleApproveUser();
    }, []);


    return (
        <div className='maincontainer1'>
            <div className='verifi-container'>
                <h2 className='verifi-title'>User Verification</h2>
                <p className='verifi-text'>
                   pleace press the button to verify user
                </p>
                <button className='verifi-button' onClick={() => navigate('/dashboard')}>
                    Verify
                </button>
            </div>
        </div>
    );
};

export default Verifi;
