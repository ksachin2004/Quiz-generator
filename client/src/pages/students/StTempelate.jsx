import React, { useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const getUsername = () => {
  // Try to get username from localStorage ("user" is stored as JSON)
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
      <nav className="bg-white shadow flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-6">
          <span className="font-bold text-xl text-blue-600">Student Portal</span>
          {/* Subject navigation links */}
          <Link to="/student/os" className="hover:text-blue-600 font-medium">OS</Link>
          <Link to="/student/dbms" className="hover:text-blue-600 font-medium">DBMS</Link>
          <Link to="/student/cn" className="hover:text-blue-600 font-medium">CN</Link>
          <Link to="/student/oops" className="hover:text-blue-600 font-medium">OOPS</Link>
        </div>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((open) => !open)}
            className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full hover:bg-blue-200 focus:outline-none"
          >
            <span role="img" aria-label="avatar" className="text-lg">👤</span>
            <span className="font-medium">Heyy {username}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default StTempelate;
