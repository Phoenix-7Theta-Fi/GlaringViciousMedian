import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

export const getDoctors = async () => {
  const response = await axios.get(`${API_BASE_URL}/doctors`);
  return response.data;
};

export const bookAppointment = async (appointmentDetails: any) => {
  const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentDetails);
  return response.data;
};

// Add more API service functions as needed
