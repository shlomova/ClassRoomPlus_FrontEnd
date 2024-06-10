import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/chatbot';

export const fetchQuestion = (id) => {
    return axios.get(`${API_BASE_URL}/question/${id}`);
};

export const submitResponse = (questionId, optionId) => {
    console.log('submitResponse:', questionId, optionId);
    return axios.post(`${API_BASE_URL}/response`, {
        questionId,
        optionId,

    });
}
