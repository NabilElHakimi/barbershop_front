import Booking from './components/Booking';
import Reservations from './components/Reservations';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Header />

                <Routes>
                    <Route path="/" element={<Booking />} />
                    <Route path="/reservations" element={<Reservations />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
