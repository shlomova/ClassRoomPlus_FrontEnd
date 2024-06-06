import React, { useState, useEffect } from 'react';
import { fetchQuestion, submitResponse } from '../../api';
import Question from './Question';
import './chatbot.css';

const Chatbot = () => {
  const [question, setQuestion] = useState(null);
  const [questionId, setQuestionId] = useState(1);
  const [url, setUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to control opening/closing of chat container
  const [loading, setLoading] = useState(false); // State to handle loading

  const fetchData = async () => {
    console.log(`Fetching question for questionId: ${questionId}`);
    setLoading(true);
    try {
      const response = await fetchQuestion(questionId);
      console.log('Fetched question:', response.data);
      setQuestion(response.data);
    } catch (error) {
      console.error('Error fetching question:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [questionId]);

  const handleOptionClick = async (optionId) => {
    console.log('Option clicked:', optionId);
    setLoading(true);
    try {
      const response = await submitResponse(question.id, optionId);
      console.log('Submit response:', response.data);

      // Ensure response.data.nextQuestionId is valid
      if (response.data.nextQuestion.id) {
        setQuestionId(response.data.nextQuestion.id);
        setUrl(response.data.url);
      } else {
        console.error('nextQuestionId is undefined:', response.data);
      }
    } catch (error) {
      console.error('Error submitting response:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Log current state for debugging
  console.log('Current state:', { question, questionId, url, isOpen, loading });

  return (
    <div>
      {/* Chatbot icon */}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <i className="fas fa-comment"></i>
      </div>

      {/* Chatbot container */}
      {isOpen && (
        <div className="chatbot-container">
          <h1>I'm chaty </h1>
          <h2 className="question-title">{question.greeting}</h2>
          {loading ? (
            <div>Loading...</div>
          ) : url ? (
            <div>Redirecting to <a href={url}>{url}</a></div>
          ) : question ? (
            <Question question={question} onOptionClick={handleOptionClick} />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
