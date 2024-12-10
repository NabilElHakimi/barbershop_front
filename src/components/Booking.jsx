import { useState, useEffect } from 'react';
import axios from 'axios';
import './Booking.css';

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
        console.log(form);
        axios.post('http://127.0.0.1:8000/api/bookings', form)
            .then(response => {
                setBookings([...bookings, response.data]);
                setForm({ name: '', email: '', telephone: '', appointment_time: '' });
            })
            .catch(error => console.error(error.response.data));
    };
    

    return (
        <div className="booking-container ">
            <h1 className="title">Barbershop Booking System</h1>
            <form onSubmit={handleSubmit} className="booking-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                    required
                />
                <input
                    type="text"
                    placeholder="Telephone"
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    className="form-input"
                    required
                />
                <input
                    type="datetime-local"
                    value={form.appointment_time}
                    onChange={(e) => setForm({ ...form, appointment_time: e.target.value })}
                    className="form-input"
                    required
                />
                <button type="submit" className="form-button">Book Now</button>
            </form>
            <h2 className="subtitle">Upcoming Appointments</h2>
            <ul className="booking-list">
                {bookings.map((booking) => (
                    <li key={booking.id} className="booking-item">
                        <span>{booking.name}</span> - 
                        <span>{booking.email}</span> - 
                        <span>{booking.telephone}</span> - 
                        <span>{new Date(booking.appointment_time).toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Booking;
