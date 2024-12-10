import { useState, useEffect } from 'react';
import { fetchBookings } from '../services/bookingService';
import bg1 from './../assets/bg.jpg';

const Reservations = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const getBookings = async () => {
            try {
                const data = await fetchBookings();
                setBookings(data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        getBookings();
    }, []);

    return (
        <div
            className="min-h-screen bg-gray-100 py-6 flex flex-col items-center sm:py-12"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
            }}
        >
            <h1 className="text-3xl font-bold mb-6 text-center">All Reservations</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 sm:px-12">
                {bookings.map((booking) => (
                    <div key={booking.id} className="max-w-sm w-full lg:max-w-full lg:flex">
                        <div
                            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{
                                backgroundImage: `url('https://imgs.search.brave.com/H_ogJ97AwBELwd4nAvjBUT-LGEP6m-XcgMiywypou5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNDg1/ODgwNS9zdG9jay1w/aG90by1oYXBweS1t/YW4')`,
                            }}
                            title="Booking Image"
                        ></div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg
                                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>
                                    Reservation Details
                                </p>
                                <div className="text-gray-900 font-bold text-xl mb-2">
                                    {booking.name}
                                </div>
                                <p className="text-gray-700 text-base">
                                    Appointment Time: {new Date(booking.appointment_time).toLocaleString()}
                                </p>
                                <p className="text-gray-700 text-base">Email: {booking.email}</p>
                                <p className="text-gray-700 text-base">Phone: {booking.telephone}</p>
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 rounded-full mr-4"
                                    src="https://imgs.search.brave.com/M3YPP5p7BXco4nU-5QmC2mJ8rn6fADqj3GAABmFtqVs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTIz/NTc5NjUwL3N0b2Nr/LXBob3RvLXlvdW5n/LW1hbi1zbWlsaW5n/LW91dGRvb3I"
                                    alt="Avatar"
                                />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">{booking.name}</p>
                                    <p className="text-gray-600">{new Date(booking.created_at).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reservations;
