import { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [form, setForm] = useState({
        name: '',
        email: '',
        telephone: '',
        appointment_time: ''
    });

    // Fetch all bookings
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/bookings')
            .then(response => setBookings(response.data))
            .catch(error => console.error(error));
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/bookings', form)
            .then(response => {
                setBookings([...bookings, response.data]);
                setForm({ name: '', email: '', telephone: '', appointment_time: '' });
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Booking System</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Telephone"
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    required
                />
                <input
                    type="datetime-local"
                    value={form.appointment_time}
                    onChange={(e) => setForm({ ...form, appointment_time: e.target.value })}
                    required
                />
                <button type="submit">Add Booking</button>
            </form>
            <h2>All Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {booking.name} - {booking.email} - {booking.telephone} - {booking.appointment_time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Booking;




