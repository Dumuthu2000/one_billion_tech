import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here, for example:
    // logout();
    navigate('/login');
  };

  const closeDropdown = () => {
    setIsProfileOpen(false);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition-colors">
                TODO
              </Link>
            </div>

            {/* Profile Section */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center focus:outline-none"
                aria-label="Open profile menu"
              >
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <User className="h-5 w-5" />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white text-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                      onClick={closeDropdown}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={() => {
                        closeDropdown();
                        handleLogout();
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer div to prevent content from hiding behind fixed navbar */}
      <div className="h-14"></div>
    </>
  );
};

export default Navbar;