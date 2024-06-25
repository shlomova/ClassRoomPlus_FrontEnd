import React, { useState, useEffect, useRef } from 'react';
import { VscTrash } from "react-icons/vsc";
import { FaPaperclip } from "react-icons/fa";
import axios from 'axios';
import './chatroom.css';

const Chatroom = ({ courseId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [file, setFile] = useState(null);
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const userId = user.data.user._id;
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/posts/course/${courseId}`, {
                withCredentials: true
            });
            setMessages(response.data.posts);
            scrollToBottom();
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [courseId]);

    const handleSendMessage = async () => {
        if (!newMessage.trim() && !file) return;

        const formData = new FormData();
        formData.append('postData', newMessage);
        formData.append('userId', userId);
        formData.append('courseId', courseId);
        if (file) {
            formData.append('file', file);
        }

        try {
            console.log('Form Data before sending:', ...formData.entries());
            await axios.post(`http://localhost:3000/posts`, formData, { withCredentials: true });

            setNewMessage('');
            setFile(null);
            document.getElementById('file-upload').value = null; // Reset file input
            fetchMessages();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleDeleteMessage = async (postId) => {
        try {
            await axios.delete(`http://localhost:3000/posts/${postId}`, { withCredentials: true });
            fetchMessages();
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    return (
        <div className="chatroom-container">
            <div className="messages-container">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`message ${message.userId === userId ? 'my-message' : 'other-message'}`}
                    >
                        <div className="message-content">
                            {message.postData}
                        </div>
                        {message.userId === userId && (
                            <button className="delete-button" onClick={() => handleDeleteMessage(message._id)}>
                                <VscTrash />
                            </button>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <label htmlFor="file-upload" className="file-upload-label">
                    <FaPaperclip />
                </label>
                <input
                    id="file-upload"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button className="send-button" onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatroom;
