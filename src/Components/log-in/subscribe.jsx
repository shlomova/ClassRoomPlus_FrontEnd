import React, { useState } from 'react';

function Subscribe({ course, student }) {
  const [requestStatus, setRequestStatus] = useState('idle');

  const requestPermission = async () => {
    setRequestStatus('requesting');
    try {
      const response = await fetch('/api/request-permission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: course.id,
          studentId: student.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      const result = await response.json();
      setRequestStatus(result.approved ? 'approved' : 'denied');
    } catch (error) {
      console.error('Error:', error);
      setRequestStatus('error');
    }
  };

  return (
    <div>
      <h3>{course.name}</h3>
      <p>Status: {requestStatus}</p>
      <button onClick={requestPermission} disabled={requestStatus === 'requesting'}>
        Request Permission
      </button>
    </div>
  );
}

export default Subscribe;
