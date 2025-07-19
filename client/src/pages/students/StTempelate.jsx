import React, { useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const getUsername = () => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      return JSON.parse(user).username || JSON.parse(user).name || 'User';
    } catch {
      return localStorage.getItem('username') || 'User';
    }
  }
  return localStorage.getItem('username') || 'User';
};

const StTempelate = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const username = getUsername();

  const handleLogout = () => {
    localStorage.clear();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md px-10 py-3 flex justify-between items-center sticky top-0 z-50">
        {/* Left Section: Brand and Subject Links */}
        <div className="flex items-center gap-10">
          <Link
            to="/students/stHome"
            className="text-2xl font-semibold text-blue-700 tracking-tight hover:text-blue-900 transition-colors duration-200"
          >
            Study Material
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <Link to="/students/os" className="hover:text-blue-600 transition-colors duration-200">OS</Link>
            <Link to="/students/dbms" className="hover:text-blue-600 transition-colors duration-200">DBMS</Link>
            <Link to="/students/cn" className="hover:text-blue-600 transition-colors duration-200">CN</Link>
            <Link to="/students/oops" className="hover:text-blue-600 transition-colors duration-200">OOPS</Link>
          </div>
        </div>

        {/* Right Section: User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-full transition duration-150"
          >
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold uppercase">
              {username[0]}
            </div>
            <span className="text-sm font-medium text-gray-800">Hello, {username}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6 md:p-10 w-full max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default StTempelate;
