import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/bookings';

// Fetch all bookings
export const fetchBookings = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

// Create a new booking
export const createBooking = async (form) => {
    try {
        const response = await axios.post(API_URL, form);
        return response.data;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};
