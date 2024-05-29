import { useState } from 'react';
import axios from 'axios';

const DeleteSubscription = ({ courseId, user, showDeleteSubscription, setDeleteShowSubscription }) => {
  const [message, setMessage] = useState('');
  const [noError, setNoError] = useState(null);

  const handleDeleteSubscribe = async () => {
  
    try {
      const { data } = await axios.delete(`http://localhost:3000/courses/subscribe/${courseId}`, {
        data: { userId: user._id },
        withCredentials: true
      })
      console.log(data);
      setNoError(true)
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }

    
    setDeleteShowSubscription(false)
  }

  const handleDeleteSubscribeNo = () => {
    setDeleteShowSubscription(false)
  }

  return (
    <>
      {showDeleteSubscription && (
        <div className="confirm-modal">
          <p>Are you sure that you want to delete your subscription?</p>
          <div className="buttons">
            <button className="confirm" onClick={handleDeleteSubscribe}>Yes</button>
            <button className="cancel" onClick={handleDeleteSubscribeNo}>No</button>
          </div>
        </div>
      )}
      <div>
        {noError && <p>The deletion was successful</p>}
        {message && <p>{message}</p>}
      </div>
    </>


  )
}

export default DeleteSubscription