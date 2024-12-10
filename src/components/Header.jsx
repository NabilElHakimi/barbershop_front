import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow-lg fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://imgs.search.brave.com/RFeyi4JYOrsUtfUshjQMA7IYCkOcwraLJGHBj8n9SPQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDUvMzAxNjExMzUv/ODQxLTc2OHg1OTEu/cG5n"
                            alt="Barbershop Logo"
                            className="w-24 h-12 mr-4"
                        />
                        <h1 className="text-xl font-bold text-gray-800">Barbershop</h1>
                    </div>

                    <nav className="flex space-x-4">
                        <Link
                            to="/"
                            className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Booking
                        </Link>
                        <Link
                            to="/reservations"
                            className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Reservations
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
