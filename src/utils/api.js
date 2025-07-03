import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

// Create an Axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Example: User login
export const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

// Example: Fetch posts
export const fetchPosts = async () => {
    const response = await api.get('/posts');
    return response.data;
};

// Example: Create a new post
export const createPost = async (postData) => {
    const response = await api.post('/posts', postData);
    return response.data;
};

// Example: Like a post
export const likePost = async (postId) => {
    const response = await api.post(`/posts/${postId}/like`);
    return response.data;
};

export default api;