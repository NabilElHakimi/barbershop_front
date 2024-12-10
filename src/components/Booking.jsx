import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { fetchBookings, createBooking } from '../services/bookingService'; 
import bg1 from './../assets/bg.jpg';

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [form, setForm] = useState({
        name: '',
        email: '',
        telephone: '',
        appointment_time: ''
    });
    const [minTime, setMinTime] = useState("");

    useEffect(() => {
        const getBookings = async () => {
            try {
                const data = await fetchBookings();
                setBookings(data);
            } catch (error) {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to fetch bookings.',
                });
            }
        };

        getBookings();

        const now = new Date();
        now.setHours(now.getHours() + 3); // Add 3 hours
        const isoTime = now.toISOString().slice(0, 16); // Format as "YYYY-MM-DDTHH:MM"
        setMinTime(isoTime);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newBooking = await createBooking(form);
            setBookings([...bookings, newBooking]);
            setForm({ name: '', email: '', telephone: '', appointment_time: '' });

            // Show success popup
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your booking has been successfully submitted.',
            });
        } catch (error) {
            console.error(error);

            // Show error popup
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to submit your booking. Please try again.',
            });
        }
    };

    return (
        <div 
            className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 " 
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
                ></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Barbershop Booking</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input 
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                        placeholder="Name"
                                        required
                                    />
                                    <label 
                                        htmlFor="name" 
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="relative">
                                    <input 
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                        placeholder="Email"
                                        required
                                    />
                                    <label 
                                        htmlFor="email" 
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="relative">
                                    <input 
                                        type="text"
                                        name="telephone"
                                        value={form.telephone}
                                        onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                        placeholder="Telephone"
                                        required
                                    />
                                    <label 
                                        htmlFor="telephone" 
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Telephone
                                    </label>
                                </div>
                                <div className="relative">
                                    <input 
                                        type="datetime-local"
                                        name="appointment_time"
                                        value={form.appointment_time}
                                        min={minTime} // Set minimum time to 3 hours from now
                                        onChange={(e) => setForm({ ...form, appointment_time: e.target.value })}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                        required
                                    />
                                    <label 
                                        htmlFor="appointment_time" 
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Appointment Time
                                    </label>
                                </div>
                                <div className="relative">
                                    <button 
                                        type="submit"
                                        className="bg-blue-500 text-white rounded-md px-4 py-2"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
